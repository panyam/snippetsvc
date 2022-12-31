import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import util from 'util';
import { compile, createProcessor } from '@mdx-js/mdx';
import prettier from 'prettier';
import { test } from 'uvu';
import { equal } from 'uvu/assert';

import plugin from '../';

const fixtures = './src/tests/fixtures';
const inspect = (result: any) => util.inspect(result, false, null, true);

function stripPositions(ast: any): any {
  if (ast) {
    delete ast['position'];
    for (const child of ast.children || []) {
      stripPositions(child);
    }
  }
}

async function runTest(name: string, override = false) {
  console.log('Runnign test: ', name);
  const [input, expected] = await readCase(name);

  /*
  const ast = await createProcessor({
    development: true,
    remarkPlugins: [plugin],
    jsx: true,
  }).parse(input);
  console.log('AST: ', inspect(ast));

  const compiledResult = await compile(input, {
    remarkPlugins: [plugin],
    jsx: true,
    // development: true,
  });
  console.log('compiledResult: ', compiledResult);
  */

  const result = await createProcessor({
    development: true,
    remarkPlugins: [plugin],
    jsx: true,
  }).process(input);
  // console.log('processedResult: ', String(result));

  const formatted = prettier.format(String(result), { parser: 'babel' });
  if (override) {
    await writeFixture(name, 'expected.txt', formatted);
  } else {
    equal(result.value, expected);
  }
}

async function readFixture(name: string, ext: string) {
  return await readFile(join(fixtures, name + '.' + ext));
}

async function writeFixture(name: string, ext: string, data: string) {
  return await writeFile(join(fixtures, name + '.' + ext), data);
}

async function readCase(name: string): Promise<[string, string]> {
  const expected = await readFixture(name, 'expected.txt');
  let input;
  try {
    input = await readFixture(name, 'input.mdx');
  } catch {
    input = await readFixture(name, 'input.md');
  }
  return [input.toString(), expected.toString()];
}

const startTest = (name: string, override = false) =>
  test(name, async () => await runTest(name, override));

startTest('basic', true);
/*
    const result = await compile(input, {
      remarkPlugins: [remarkMdxCodeMeta],
      jsx: true,
    });
    const formatted = prettier.format(String(result), { parser: 'babel' });
    if (process.argv.includes('--write')) {
      await writeFile(expected, formatted);
    }
    */
// equal(formatted, await readFile(expected, 'utf8'));

test.run();
