const { test, expect } = require('@jest/globals');

const { sumDirSizes, getSizeOfDirToDelete } = require('./solutions');
const { inputData } = require('./input');

test('Should return the sum of the size of directories under 100,000 bytes', () => {
  expect(sumDirSizes(inputData)).toBe(1348005);
});

test('Should return the size of the best possible directory to delete', () => {
  expect(getSizeOfDirToDelete(inputData)).toBe(12785886);
});
