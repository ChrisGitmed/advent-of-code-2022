const { test, expect } = require('@jest/globals');

const { getHighestCalories } = require('./solution-1');
const { getThreeHighestCalories } = require('./solution-2');
const inputData = require('./input');

test('Should return the max amount of calories on one elf.', () => {
  expect(getHighestCalories(inputData)).toBe(73211);
});

test('Should return the sum of of calories on the three elves with the most calories.', () => {
  expect(getThreeHighestCalories(inputData)).toBe(213958);
});
