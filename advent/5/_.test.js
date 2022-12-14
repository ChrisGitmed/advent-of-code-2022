const { test, expect } = require('@jest/globals');

const { getTopCratesAfterArrangement } = require('./solutions');
const { inputData } = require('./input');

test('Should return the top crates after arrangement', () => {
  expect(getTopCratesAfterArrangement(inputData)).toBe('SPFMVDTZT');
});

// test('', () => {
//   expect((inputData)).toBe();
// });
