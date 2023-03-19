add = (num1, num2) => num1 + num2;

subtract = (num1, num2) => num1 - num2;

multiply = (num1, num2) => num1 * num2;

divide = (num1, num2) => {
    if (num2 == 0) {
        return NaN;
    }
    return num1 / num2;
}

operate = (num1, num2, operator) => {
    return operator(num1, num2);
}
