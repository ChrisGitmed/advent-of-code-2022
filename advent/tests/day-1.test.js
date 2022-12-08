const { test, expect } = require('@jest/globals');
const { getHighestCalories } = require('../solutions/day-1.js');

test('Should return the max amount of calories.', () => {
    const input =`500
500
500

500
500

500
    `;
    expect(getHighestCalories(input)).toBe(1500);
});

test('Should works with arrays of length 1.', () => {
    const input =`500

300

100
    `;
    expect(getHighestCalories(input)).toBe(500);
});

test('Should not be tricked by negative numbers.', () => {
    const input =`500

300

-700
    `;
    expect(getHighestCalories(input)).toBe(500);
});
