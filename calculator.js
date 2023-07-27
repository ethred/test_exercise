const add = (...param) => { // Add function
    let sum = 0;
    param.forEach((item) => {
        sum += item;
    });
    return sum;
};

const subtract = (a, b) => a - b; // Subtract function

const multiply = (...param) => { // Multiply function
    const result = param.reduce((a, b) => a * b
    );
    return result;
};

const divide = (a, b) => a / b; // Divide functon

module.exports = { // Obtain results
    add, subtract, multiply, divide,
};