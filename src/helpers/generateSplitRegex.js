const { AVAILABLE_DELIMITERS } = require("../constants")

const generateDelimitersRegexForSplit = ()=> {
    return new RegExp(`[${AVAILABLE_DELIMITERS.join("")}]`)
}

module.exports = {
    generateDelimitersRegexForSplit
}