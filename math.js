const addition = (a, b) => {
    return a + b
}

const subtraction = (a, b) => {
    return a - b
}

const multiplication = (a, b) => {
    return a * b
}

const division = (a, b) => {
    return a / b
}

/*
exports.addition = addition
exports.subtraction = subtraction
exports.multiplication = multiplication
exports.division = division
*/

// Export the functions using module.exports
module.exports = {
    addition,
    subtraction,
    multiplication,
    division
}