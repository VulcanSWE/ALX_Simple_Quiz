//addition function
function add(number1, number2) {
    return number1 + number2;
}

//subtraction function
function subtract(number1, number2) {
    return number1 - number2;
}  

//multiplication function
function multiply(number1, number2) {
    return number1 * number2;
}

//division function
function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}