const assert = require('assert');
const expect = require('chai').expect;
const { add, subtract, multiply, divide } = require('./operations');

it('error thrown when NaN passed', () => {
    expect(() => { add(1, 'adasd') }).to.throw('NaN args passed');
});

it('correctly calculates sum of 1 and 3', () => {
    assert.equal(add(1, 3), 4);
});

it('correctly calculates the sum of -1 and -1', () => {
    assert.equal(add(-1, -1), -2)
});

it('correctly calculates difference of 6 and 3', () => {
    assert.equal(subtract(6, 3), 3);
});

it('correctly calculates product of 6 and 3', () => {
    assert.equal(multiply(6, 3), 18);
});

it('correctly calculates quotient of 6 and 3', () => {
    assert.equal(divide(6, 3), 2);
});