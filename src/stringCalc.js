function addStringAsNumbers(numbers) {
    if (numbers === "") {
        return 0;
    }

    let numberArray = numbers.split(",");

    if(numberArray.length === 1) {
        return Number(numberArray[0])
    }

    let sumOfNumbers = 0;

    for (let number of numberArray) {
        sumOfNumbers += Number(number)
    }

    return sumOfNumbers;
}

addStringAsNumbers("1,3,5")
module.exports = {
    addStringAsNumbers
}