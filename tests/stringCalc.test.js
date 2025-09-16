const { addStringAsNumbers } = require('../src/stringCalc');

test("return 0 for empty string", () => {
  expect(addStringAsNumbers("")).toBe(0);
});

test("return same number for single number passed", ()=> {
  expect(addStringAsNumbers("1").toBe(1))
})