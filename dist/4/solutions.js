"use strict";
const { inputData } = require('./input');
// Part 1
const getAssignmentPairs = (input) => {
    // Parse input
    const pairs = input.split('\n');
    let count = 0;
    for (const pair of pairs) {
        const [firstSet, secondSet] = pair.split(',');
        const firstValues = firstSet.split('-').map((str) => Number(str));
        const secondValues = secondSet.split('-').map((str) => Number(str));
        if ((firstValues[0] >= secondValues[0] &&
            firstValues[0] <= secondValues[1] &&
            firstValues[1] >= secondValues[0] &&
            firstValues[1] <= secondValues[1]) ||
            (secondValues[0] >= firstValues[0] &&
                secondValues[0] <= firstValues[1] &&
                secondValues[1] >= firstValues[0] &&
                secondValues[1] <= firstValues[1]))
            count += 1;
    }
    return count;
};
// Part 2
const getOverlappingPairs = (input) => {
    const pairs = input.split('\n');
    let count = 0;
    for (const pair of pairs) {
        const [firstSet, secondSet] = pair.split(',');
        const firstValues = firstSet.split('-').map((str) => Number(str));
        const secondValues = secondSet.split('-').map((str) => Number(str));
        if ((firstValues[0] <= secondValues[0] && firstValues[1] >= secondValues[1]) ||
            (firstValues[0] >= secondValues[0] && firstValues[1] <= secondValues[1]) ||
            (firstValues[0] <= secondValues[1] && secondValues[0] <= firstValues[1]))
            count += 1;
    }
    return count;
};
module.exports = { getAssignmentPairs, getOverlappingPairs };
