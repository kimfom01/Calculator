"use strict";

let num1;
let num2;
let operator;
let result = "";

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

const roundUp = (output) => {
    return output.toFixed(6);
}

// TODO: Implement the +/- sign switching, the rounding up for long decimal output, and prevent user from entering multiple . in one go as in 9.4.35.2

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
            if (num1 == undefined) {
                num1 = parseFloat(display.innerText);
                display.innerText = "";
            }
            else {
                num2 = parseFloat(display.innerText);
                result = operate(num1, num2, operator);
                num1 = parseFloat(display.innerText);
                display.innerText = "";
            }
            operator = add;
            break;
        case "subtraction":
            if (num1 == undefined) {
                num1 = parseFloat(display.innerText);
                display.innerText = ""
            }
            else {
                num2 = parseFloat(display.innerText);
                result = operate(num1, num2, operator);
                num1 = parseFloat(display.innerText);
                display.innerText = "";
            }
            operator = subtract;
            break;
        case "multiplication":
            if (num1 == undefined) {
                num1 = parseFloat(display.innerText);
                display.innerText = ""
            }
            else {
                num2 = parseFloat(display.innerText);
                result = operate(num1, num2, operator);
                num1 = parseFloat(display.innerText);
                display.innerText = "";
            }
            operator = multiply;
            break;
        case "division":
            if (num1 == undefined) {
                num1 = parseFloat(display.innerText);
                display.innerText = ""
            }
            else {
                num2 = parseFloat(display.innerText);
                result = operate(num1, num2, operator);
                num1 = parseFloat(display.innerText);
                display.innerText = "";
            }
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

display.innerText = result;

const clear = document.getElementById("clear");

clear.addEventListener("click", () => {
    num1 = undefined;
    num2 = undefined;
    display.innerText = ""
});

const percentage = document.getElementById("percentage");

percentage.addEventListener("click", () => {
    display.innerText = parseFloat(display.innerText) / 100;
})