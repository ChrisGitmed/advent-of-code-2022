const { test, expect } = require('@jest/globals');

const { countVisibleTrees } = require('./solutions.js');
const { inputData } = require('./input.js');

test('Should return the count of all visible trees', () => {
  expect(countVisibleTrees(inputData)).toBe(1835); // 1835
});

// test('', () => {
//   expect((inputData)).toBe();
// });
