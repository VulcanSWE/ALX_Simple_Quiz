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

document.getElementById("add").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = add(num1, num2);
    document.getElementById("result").innerText = "Result: " + result;
});

documemt.getElementById('subtract').addEventListener("Click", function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = subtract(num1, num2);
    document.getElementById("result").innerText = "Result: " + result;
});

document.getElementById("multiply").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = multiply(num1, num2);
    document.getElementById("result").innerText = "Result: " + result;
});  

document.getElementById("divide").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = divide(num1, num2);
    document.getElementById("result").innerText = "Result: " + result;
});

// Clear button functionality
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("num1").value = '';
    document.getElementById("num2").value = '';
    document.getElementById("result").innerText = "Result: ";
});


