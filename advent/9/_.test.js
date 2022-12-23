const { test, expect } = require('@jest/globals');

const { getCountOfVisitedPositionsOne, getCountOfVisitedPositionsTwo } = require('./solutions');
const { inputData } = require('./input');

test('Should return the count of visited positions', () => {
  expect(getCountOfVisitedPositionsOne(inputData)).toBe(6087);
});

test('Should return the count of visited positions', () => {
  expect(getCountOfVisitedPositionsTwo(inputData)).toBe(2493);
});
