function addStringAsNumbers(numbers) {
    if (numbers === "") {
        return 0;
    }

    let numberArray = numbers.split(",");

    if(numberArray.length === 1) {
        return Number(numberArray[0])
    }
}

module.exports = {
    addStringAsNumbers
}