const { test, expect } = require('@jest/globals');

const { countVisibleTrees } = require('./solutions');
const { inputData } = require('./input');

const testInput = `30373
25512
65332
33549
35390`;

test('Should return the count of all visible trees', () => {
  expect(countVisibleTrees(inputData)).toBe(1736);
});

// test('', () => {
//   expect((inputData)).toBe();
// });
