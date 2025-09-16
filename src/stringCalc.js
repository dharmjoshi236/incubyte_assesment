const { generateDelimitersRegexForSplit } = require("./helpers/generateSplitRegex");

function addStringAsNumbers(numbers) {
  if (numbers === "") {
    return 0;
  }

  let delimiterRegex = generateDelimitersRegexForSplit();
  
  let numberArray = numbers.split(delimiterRegex);

  let isNegativeNumbers = false;
  let negativeNumberArray = [];

  if (numberArray.length === 1) {
    return Number(numberArray[0]);
  }

  let sumOfNumbers = 0;

  for (let number of numberArray) {
    if (number < 0) {
      isNegativeNumbers = true;
      negativeNumberArray.push(number);
    } else if (isNaN(number)) {
      continue;
    } else {
      sumOfNumbers += Number(number);
    }
  }

  if (isNegativeNumbers) {
    return `negative numbers not allowed ${negativeNumberArray.join(",")}`;
  } else {
    return sumOfNumbers;
  }
}

module.exports = {
  addStringAsNumbers,
};
