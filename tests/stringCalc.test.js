const { addStringAsNumbers } = require('../src/stringCalc');
const {} = require('jest')

test("return 0 for empty string", () => {
  expect(add("")).toBe(0);
});