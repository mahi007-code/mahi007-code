function Addition(num1, num2) {
    return (num1 + num2);
}

function Subtraction(num1, num2) {
    return (num1 - num2);
}

function Multiplication(num1, num2) {
    return (num1 * num2);
}

function Divide(num1, num2) {
    return (num1 / num2);
}

let firstNumber = parseFloat(prompt("Enter 1st Number:"));
let operator = prompt("Enter Operator (+, -, *, /):");
let secondNumber = parseFloat(prompt("Enter 2nd Number:"));

if (operator === '+') {
    console.log(Addition(firstNumber, secondNumber));
} else if (operator === '-') {
    console.log(Subtraction(firstNumber, secondNumber));
} else if (operator === '*') {
    console.log(Multiplication(firstNumber, secondNumber));
} else if (operator === '/') {
    console.log(Divide(firstNumber, secondNumber));
} else {
    console.log("Invalid Operator.");
}
