const { test, expect } = require('@jest/globals');

const { sumOfPriorities, sumOfBadgePriorities } = require('./solutions');
const { inputData } = require('./input');

test('Should return the sum of priorities', () => {
  expect(sumOfPriorities(inputData)).toBe(7674);
});

test('Should return the sum of badge priorities', () => {
  expect(sumOfBadgePriorities(inputData)).toBe(2805);
});
