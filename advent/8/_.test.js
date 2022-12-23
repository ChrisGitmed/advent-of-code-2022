const { test, expect } = require('@jest/globals');

const { countVisibleTrees, getLargestScenicScore } = require('./solutions.js');
const { inputData } = require('./input.js');

test('Should return the count of all visible trees', () => {
  expect(countVisibleTrees(inputData)).toBe(1835);
});

test('Should return the largest scenic score', () => {
  expect(getLargestScenicScore(inputData)).toBe(263670);
});
