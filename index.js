"use strict";

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
