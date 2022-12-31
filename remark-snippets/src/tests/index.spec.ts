/* eslint-disable */
import plugin from '../index';
import { remark } from 'remark';

console.log('Plugin: ', plugin);
console.log('Rem: ', remark);

async function runTest(input: string, expected: any) {
  const result = await remark().process(input);
  console.log('Result: ', result);
  /*
  const result = await compile(input, {
    remarkPlugins: [remarkMdxCodeMeta],
    jsx: true,
  });
 */
  // const formatted = prettier.format(String(result), { parser: 'babel' });
  expect(result).toEqual(expected);
}

describe('Basic tests', async () => {
  test('asdf', async () => {
    await runTest(
      `
            Hello World
    `,
      `
    `,
    );
  });
});
