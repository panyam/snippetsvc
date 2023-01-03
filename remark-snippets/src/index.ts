import jsx from 'acorn-jsx';
import { Parser } from 'acorn';
// import { BaseNode, Program } from 'estree';
import { Content, Code, Parent, Root } from 'mdast';
import { MdxJsxFlowElement, MdxFlowExpression } from 'mdast-util-mdx';
import { Plugin, Transformer } from 'unified';
import util from 'util';
import * as snippets from 'snippetsvc';
import { visit } from 'unist-util-visit';
// const visit = require('unist-util-visit').default

const logTree = false;
// TODO - put this in a map and create this in the transformer when we konw
// a different address
const snippetsClient = snippets.NewClient();
const inspect = (result: any) => util.inspect(result, false, null, true);

// function visit(ast: any, elem: string, visitor: any) {}

function createTransformer(options: any): Transformer<Root> {
  return async (ast, file) => {
    if (logTree) {
      console.log('Options: ', inspect(options));
      console.log('Full File: ', inspect(file));
    }
    const foundSnippets = new Map<string, Snippet>();
    const allSnippets = [] as Snippet[];
    // visitSnipCodeNodes(ast, file, foundSnippets, allSnippets)
    visitCodeNodes(ast, file, foundSnippets, allSnippets);

    // console.log('Full AST Before: ', inspect(ast));
    const allPromises = allSnippets.map((sn: any) => sn.promise);
    const promiseValues = await Promise.all(allPromises);

    // reverse snippets and the promise values too
    allSnippets.reverse();
    promiseValues.reverse();
    // allSnippets.sort((a: Snippet, b: Snippet) => b.childIndex - a.childIndex);
    // console.log('SN: ', allSnippets, 'PromiseValues: ', inspect(promiseValues));

    allSnippets.forEach((sncode: Snippet, ind: number) => {
      if (!sncode.silent) {
        const parent = sncode.parent as Parent;
        const index = sncode.childIndex as number;
        // console.log("Inserting after: ", parent.children[index]);
        parent.children.splice(index + 1, 0, ...promiseValues[ind]);
        // console.log('Full AST After: ', index, inspect(ast));
      }
    });

    // Now visit all snippet output nodes
    visitSnipOutNodes(ast, file, foundSnippets);
  };
}

function visitSnipOutNodes(
  ast: any,
  file: any,
  foundSnippets: Map<string, Snippet>,
) {
  visit(
    ast,
    'code',
    (node: Code, index: number | null, parent: Parent | null) => {
      if (
        index == null ||
        parent == null ||
        !node.meta ||
        node.lang != 'snipout'
      ) {
        return;
      }
      // only attribute needed here is the ID of the snippet we want to show
      const attribs = parseMeta(node.meta);
      console.log('Meta: ', node.meta, attribs);
      const srcId = attribs.get('src') || null;
      if (srcId == null) {
        return;
      }

      const snippet = foundSnippets.get(srcId) || null;
      if (snippet == null) {
        throw Error('Snippet does not exist in page: ' + srcId);
      }

      snippet.promise?.then((val) => {
        parent.children[index] = parseMarkup(val[1].value);
        console.log('Doing snipout');
      });
      console.log('Done snipout');
    },
  );
}

function visitCodeNodes(
  ast: any,
  file: any,
  foundSnippets: Map<string, Snippet>,
  allSnippets: Snippet[],
) {
  visit(
    ast,
    'code',
    (node: Code, index: number | null, parent: Parent | null) => {
      if (
        index == null ||
        parent == null ||
        !node.meta ||
        !node.lang ||
        node.lang == 'snipout'
      ) {
        // snipouts these are to be handled after snippets to generate output
        return;
      }
      const attribs = parseMeta(node.meta);
      // Our param values do not allow for strings with " = " in them
      console.log('Meta: ', node.meta, attribs);
      const idAttrib = attribs.get('snippet') || null;
      if (idAttrib == null) {
        return;
      }
      if (foundSnippets.has(idAttrib)) {
        throw Error('Snippet elements *must* have a unique ID within the page');
      }
      const code = node.value;
      // const env = attribs.get("env");
      const prevSnipId = (attribs.get('prev') || '').trim();
      const newSnippet = new Snippet(idAttrib, node, parent, code);
      newSnippet.hidden = attribs.get('hidden') == 'true';
      newSnippet.silent = attribs.get('silent') == 'true';
      newSnippet.childIndex = index;
      newSnippet.promise = newSnippet.execute('/tmp/enva');
      if (prevSnipId != '') {
        if (!foundSnippets.has(prevSnipId)) {
          throw new Error('Previous snippet not found: ' + prevSnipId);
        }
        newSnippet.prev = foundSnippets.get(prevSnipId) as Snippet;
      }

      allSnippets.push(newSnippet);
      foundSnippets.set(idAttrib, newSnippet);
      // Add a place holder to be populated
      // parent.children.splice(index + 1, 0, {} as Content);
    },
  );
}

function visitSnipCodeNodes(
  ast: any,
  file: any,
  foundSnippets: Map<string, Snippet>,
  allSnippets: Snippet[],
) {
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
  visit(
    ast,
    'mdxJsxFlowElement',
    (node: MdxJsxFlowElement, index: number | null, parent: Parent | null) => {
      if (index == null || parent == null || node.name != 'Snippet') {
        return;
      }
      const code = getAttrib(node, 'children') || '';
      const setupCode = getAttrib(node, 'setup') || '';
      const idAttrib = (getAttrib(node, 'id') || '').trim();
      const env = getAttrib(node, 'env');
      const prevSnipId = (getAttrib(node, 'prev') || '').trim();
      if (idAttrib == '' || foundSnippets.has(idAttrib)) {
        throw Error('Snippet elements *must* have a unique ID within the page');
      }
      const newSnippet = new Snippet(idAttrib, node, parent, code);
      newSnippet.setupCode = setupCode;
      newSnippet.hidden = getAttrib(node, 'hidden') || false;
      newSnippet.silent = getAttrib(node, 'silent') || false;
      newSnippet.childIndex = index;
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
      // parent.children.splice(index + 1, 0, {} as Content);
    },
  );
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
  silent = false;
  childIndex = 0;
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
      // console.log('Response: ', resp);

      if (resp.execution) {
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

        const blockOutputs = resp.execution.blockOutputs;
        const processOutput = blockOutputs[blockOutputs.length - 1];
        const value = `<pre><code className="hljs language-ts">{\`${processOutput}\`}</code></pre>`;

        const processError = resp.execution.errorOutput;
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
      }
    } catch (err: any) {
      console.log('GRPC Error: ', err);
    }
    return out;
  }
}

/**
 * A markdown plugin for transforming code metadata.
 *
 * @returns A unified transformer.
 */
const remarkMdxSnippets: Plugin<[any], Root> = createTransformer;
export default remarkMdxSnippets;

function parseMeta(meta: string): Map<string, any> {
  const cleaned = meta.replaceAll(/\s*=\s*/g, '=');
  const out = new Map<string, any>();
  const kvpairs = cleaned.split(' ');
  for (const kv of kvpairs) {
    const [key, value] = kv.trim().split('=');
    let val = value;
    if (value[0] === '"' && value[value.length - 1] === '"') {
      val = value.slice(1, -1);
    }
    out.set(key, val);
  }
  return out;
}
