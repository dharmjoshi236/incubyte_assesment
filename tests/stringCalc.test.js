const { addStringAsNumbers } = require('../src/stringCalc');

test("return 0 for empty string", () => {
  expect(addStringAsNumbers("")).toBe(0);
});

test("return same number for single number passed", ()=> {
  expect(addStringAsNumbers("1")).toBe(1);
})

test("return sum of number for multiple numbers in string", ()=> {
  expect(addStringAsNumbers("1,3,5")).toBe(9);
})

test("return sum of number for new line delimiter", ()=> {
  expect(addStringAsNumbers("1\n2,3")).toBe(6);
})

test("return sum of number for a custom delimiter", ()=> {
  expect(addStringAsNumbers("//;\n1;2")).toBe(3);
})

test("return error statement of negative numbers", ()=> {
  expect(addStringAsNumbers("-1,3,-2")).toBe("negative numbers not allowed -1,-2");
})