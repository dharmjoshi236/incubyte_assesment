const { addStringAsNumbers } = require('../src/stringCalc');

test("return 0 for empty string", () => {
  expect(addStringAsNumbers("")).toBe(0);
});