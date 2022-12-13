const { test, expect } = require('@jest/globals');

const { getTopCratesAfterArrangement } = require('./solutions');
const { inputData } = require('./input');

const testInput = 'move 1 from 1 to 2'
test('Should return the top crates after arrangement', () => {
  expect(getTopCratesAfterArrangement(testInput)).toBe('CFHZNPMND');
});

// test('', () => {
//   expect((inputData)).toBe();
// });
