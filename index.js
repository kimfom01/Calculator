"use strict";

let num1 = "";
let num2;
let operator;

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => {
    if (num2 == 0) {
        return NaN;
    }

    return num1 / num2;
}

const operate = (num1, num2, operator) => {
    return operator(num1, num2);
}

const numbers = document.querySelectorAll(".numbers");
const display = document.getElementById("display");

numbers.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault();

    const val = e.target.innerText;

    display.innerText += val;

}));

const operations = document.querySelectorAll(".right");

operations.forEach(btn => btn.addEventListener("click", (e) => {
    e.preventDefault();

    const operation = e.target.id;

    switch (operation) {
        case "addition":
            num1 = parseFloat(display.innerText);
            display.innerText = ""
            operator = add;
            break;
        case "subtraction":
            num1 = parseFloat(display.innerText);
            display.innerText = ""
            operator = subtract;
            break;
        case "multiplication":
            num1 = parseFloat(display.innerText);
            display.innerText = ""
            operator = multiply;
            break;
        case "division":
            num1 = parseFloat(display.innerText);
            display.innerText = ""
            operator = divide;
            break;
        case "equals":
            num2 = parseFloat(display.innerText);
            display.innerText = ""
            display.innerText = operate(num1, num2, operator);
            break;
        default:
            console.error("this shouldn't happen");
    }
}));


const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    display.innerText = ""
});