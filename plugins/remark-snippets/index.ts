import jsx from 'acorn-jsx';
import { Parser } from 'acorn';
import { BaseNode, Program } from 'estree';
import { Content, Code, Parent, Root } from 'mdast';
import { MdxJsxFlowElement, MdxFlowExpression } from 'mdast-util-mdx';
import { Plugin, Transformer } from 'unified';
import { visit } from 'unist-util-visit';
import util from 'util';
import crypto from 'crypto';
import path from 'path';
import fs from 'fs';
import * as snippets from 'snippetsvc';
import { execFile, execFileSync, ChildProcess } from 'child_process';

const logTree = false;
// TODO - put this in a map and create this in the transformer when we konw
// a different address
const snippetsClient = snippets.NewClient();

function createTransformer(options: any): Transformer<Root> {
  return async (ast, file) => {
    if (logTree) {
      console.log(
        'Full AST: ',
        util.inspect(ast, { showHidden: false, depth: null, colors: true }),
      );
      console.log(
        'Options: ',
        util.inspect(options, { showHidden: false, depth: null, colors: true }),
      );
      console.log(
        'Full File: ',
        util.inspect(file, { showHidden: false, depth: null, colors: true }),
      );
    }
    const foundSnippets = new Map<string, Snippet>();
    const allSnippets = [] as Snippet[];
    visit(
      ast,
      'mdxJsxFlowElement',
      (
        node: MdxJsxFlowElement,
        index: number | null,
        parent: Parent | null,
      ) => {
        if (index == null || parent == null || node.name != 'SnipCode') {
          return;
        }
        const code = getAttrib(node, 'children') || '';
        const setupCode = getAttrib(node, 'setup') || '';
        const idAttrib = (getAttrib(node, 'id') || '').trim();
        const env = getAttrib(node, 'env');
        const prevSnipId = (getAttrib(node, 'prev') || '').trim();
        if (idAttrib == '' || foundSnippets.has(idAttrib)) {
          throw Error(
            'SnipCode elements *must* have a unique ID within the page',
          );
        }
        const newSnippet = new Snippet(idAttrib, node, parent, code);
        newSnippet.setupCode = setupCode;
        newSnippet.hidden = getAttrib(node, 'hidden') || false;
        newSnippet.hideOutput = getAttrib(node, 'hideOutput') || false;
        newSnippet.index = allSnippets.length - 1;
        newSnippet.promise = newSnippet.execute('/tmp/enva');
        if (prevSnipId != '') {
          if (!foundSnippets.has(prevSnipId)) {
            throw new Error('Previous snippet not found: ' + prevSnipId);
          }
          newSnippet.prev = foundSnippets.get(prevSnipId)!;
        }

        allSnippets.push(newSnippet);
        foundSnippets.set(idAttrib, newSnippet);
        // Add a place holder to be populated
        parent.children.splice(index + 1, 0, {} as Content);
      },
    );

    // We run each snippet in its own execution instead of maintaining states etc
    // This has a couple of benefits:
    // * We dont need to keep an interpreter/kernel hanging on the
    //   executor node wherever it is.  Each execution is its own thing and no dependencies
    //   mess can ensue.
    // * Our kernel may not even be multi threaded.  For a "serial" notebook style page
    //   the list of snippets may just be a stick but depending on how prev is used we could
    //   end up having a tree (dags are not possible - and even if they are since we are not
    //   capturing any contexts of the VM forking and joining threads and all their data
    //   becomes a pain).
    //
    // So each snippet as a single block with its "real" code beign its provided code +
    // the real code of all its prev nodes is good enough.  Also no topological sort
    // needed
    // Build a dag of all the promises and execute them in a topologically sorted way
    const allPromises = allSnippets.map((sn: any) => sn.promise);
    const promiseValues = await Promise.all(allPromises);
    allSnippets.sort((a: any, b: any) => b.index - a.index);
    console.log(
      'SN: ',
      allSnippets,
      'PromiseValues: ',
      promiseValues,
      /*
      util.inspect(promiseValues, {
        showHidden: false,
        depth: null,
        colors: true,
      }),
     */
    );

    allSnippets.forEach((sncode: Snippet, ind: number) => {
      const parent = sncode.parent as Parent;
      const index = sncode.index as number;
      parent.children.splice(index, 1, ...promiseValues[ind]);
    });
  };
}

/**
 * A markdown plugin for transforming code metadata.
 *
 * @returns A unified transformer.
 */
const remarkMdxCodeMeta: Plugin<[any], Root> = createTransformer;

export default remarkMdxCodeMeta;

function getAttrib(node: any, attribName: string): any {
  const attrib = node.attributes.filter(
    (attr: any) => attr.type == 'mdxJsxAttribute' && attr.name == attribName,
  );
  if (attrib.length == 0 || !attrib[0].value || attrib[0].value == null) {
    return null;
  }
  if (typeof attrib[0].value === 'string') {
    return attrib[0].value;
  } else {
    return attrib[0].value.value;
  }
}

const parser = Parser.extend(jsx());
function parseMarkup(value: string): any {
  const estree = parser.parse(value, { ecmaVersion: 'latest' });
  return {
    type: 'mdxFlowExpression',
    value,
    data: { estree },
  };
}

export class Snippet {
  prev: Snippet | null = null;
  setupCode = '';
  hidden = false;
  hideOutput = false;
  index = 0;
  promise: null | Promise<any> = null;
  constructor(
    public readonly id: string,
    public readonly node: Content,
    public readonly parent: Parent,
    public code = '',
  ) {}

  get codeBlocks(): string[] {
    const out = this.prev != null ? this.prev.codeBlocks : [];
    if (this.setupCode[0] == '`') {
      this.setupCode = eval(this.setupCode);
    }
    if (this.code[0] == '`') {
      this.code = eval(this.code);
    }
    out.push(this.setupCode);
    out.push(this.code);
    return out;
  }

  /**
   * A snippet is executed in a secure sandbox and its output is returned back
   * to the caller.
   *
   * @param code  Code string to be executed
   * @param envdir  Name of the directory where the environment exists and has all
   *                the necessary packages installed.
   * @param snippetid ID of the snippet being executed.  This is used to compute Name
   *                  of the directory where the environment exists and has all
   *                  the necessary packages installed.
   */
  async execute(envdir: string): Promise<any[]> {
    const codeBlocks = this.codeBlocks;
    const out = [] as any[];
    try {
      const resp = await snippets.call<
        snippets.CreateExecutionRequest,
        snippets.CreateExecutionResponse
      >(snippetsClient, 'createExecution', {
        ownerId: '1',
        snippetId: this.id,
        codeBlocks: codeBlocks,
        envDir: '/tmp/enva',
      });
      console.log('Response: ', resp);

      out.push({
        type: 'mdxJsxFlowElement',
        name: 'h3',
        attributes: [],
        children: [
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                value: 'Output',
              },
            ],
          },
        ],
        data: { _mdxExplicitJsx: true },
      });

      const blockOutputs = resp.execution!.blockOutputs;
      const processOutput = blockOutputs[blockOutputs.length - 1];
      const value = `<pre><code>{\`${processOutput}\`}</code></pre>`;
      console.log('Value: ', value);

      const processError = resp.execution!.errorOutput;
      out.push(parseMarkup(value));
      if (processError.length > 0) {
        out.push({
          type: 'mdxJsxFlowElement',
          name: 'h3',
          attributes: [],
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  value: 'Error',
                },
              ],
            },
          ],
          data: { _mdxExplicitJsx: true },
        });
        const value = `<pre><code>{\`${processError}\`}</code></pre>`;
        out.push(parseMarkup(value));
      }
    } catch (err: any) {
      console.log('GRPC Error: ', err);
      return out;
    }

    return out;
  }
}
