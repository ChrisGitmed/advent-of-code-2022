const { test, expect } = require('@jest/globals');

const { getHighestCalories } = require('./solution');
const inputData = require('./input');

test('Should return the max amount of calories.', () => {
  expect(getHighestCalories(inputData)).toBe(73211);
});
