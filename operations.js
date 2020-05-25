const checkNaN = (x, y) => {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(+x) || isNaN(+y)) { throw new Error('NaN args passed'); }
};

const add = (x, y) => {
    checkNaN(x, y);
    return +x + +y;
};

const subtract = (x, y) => {
    checkNaN(x, y);
    return +x - +y;
};

const multiply = (x, y) => {
    checkNaN(x, y);
    return +x * +y;
};

const divide = (x, y) => {
    checkNaN(x, y);
    return +x / +y;
};

module.exports = {
 add, subtract, multiply, divide,
};
