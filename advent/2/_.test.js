const { test, expect } = require('@jest/globals');

const { getTotalScore, getNewTotalScore } = require('./solutions');
const inputData = require('./input');

test('Should return the max amount of calories on one elf.', () => {
  expect(getTotalScore(inputData)).toBe(15691);
});

// test('Should return the sum of of calories on the three elves with the most calories.', () => {
//   expect(getThreeHighestCalories(inputData)).toBe(213958);
// });
