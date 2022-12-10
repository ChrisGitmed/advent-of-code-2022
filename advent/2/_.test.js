const { test, expect } = require('@jest/globals');

const { getTotalScore, getTotalScore2 } = require('./solutions');
const inputData = require('./input');

test('Should return the total score if everything goes according to the strategy guide.', () => {
  expect(getTotalScore(inputData)).toBe(15691);
});

test('Using the new rules, should return the total score if everything goes according to the strategy guide.', () => {
  expect(getTotalScore2(inputData)).toBe(12989);
});
