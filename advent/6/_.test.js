const { test, expect } = require('@jest/globals');

const { getFirstPacketMarker, getFirstMessageMarker } = require('./solutions');
const { inputData } = require('./input');

test('Should return the index of the first start-of-packet marker.', () => {
  expect(getFirstPacketMarker(inputData)).toBe(1804);
});

test('Should return the index of the first start-of-message marker.', () => {
  expect(getFirstMessageMarker(inputData)).toBe(2508);
});
