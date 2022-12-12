const { test, expect } = require('@jest/globals');

const { getAssignmentPairs, getOverlappingPairs } = require('./solutions');
const { inputData } = require('./input');

test('Should get the assignment pairs where one range fully contains the other.', () => {
  expect(getAssignmentPairs(inputData)).toBe(456);
});

test('Should get the count of all assignment pairs that overlap at all', () => {
  expect(getOverlappingPairs(inputData)).toBe(808);
});
