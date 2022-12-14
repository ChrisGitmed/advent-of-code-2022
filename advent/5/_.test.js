const { test, expect } = require('@jest/globals');

const { getTopCrates, getTopCratesTwo } = require('./solutions');
const { inputData } = require('./input');

test('Should return the top crates after arrangement', () => {
  expect(getTopCrates(inputData)).toBe('SPFMVDTZT');
});

test('Should return the top crates after arrangement', () => {
  expect(getTopCratesTwo(inputData)).toBe('ZFSJBPRFP');
});
