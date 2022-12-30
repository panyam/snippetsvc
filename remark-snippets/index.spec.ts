/* eslint-disable */
import plugin = require('./index');
const remark = require('remark');

async function runTest(input: string, expected: any) {
  const result = await remark().use(plugin).process(input);
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
