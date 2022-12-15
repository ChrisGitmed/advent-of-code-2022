"use strict";
const { inputData } = require('./input');
const testInput = `30373
25512
65332
33549
35390`;
// Part 1
const countVisibleTrees = (input) => {
    console.log('input:\n', input, '\n');
    const rows = input.split('\n');
    let countOfVisibleTrees = 0;
    // Loop over each row
    rows.forEach((currentRow, rowNum) => {
        // console.log('currentRow: ', currentRow)
        for (let treeIdx = 0; treeIdx < currentRow.length; treeIdx++) {
            const currentTree = parseInt(currentRow[treeIdx], 10);
            // console.log('currentTree: ', currentTree);
            // Look 'North'
            let isVisibleFromNorth = true;
            for (let prevRowNum = rowNum; prevRowNum > 0; prevRowNum--) {
                if (rows[prevRowNum - 1][treeIdx] >= currentTree &&
                    rows[prevRowNum - 1][treeIdx] !== '0')
                    isVisibleFromNorth = false;
            }
            // Look 'East'
            let isVisibleFromEast = true;
            for (let eastTreeIdx = treeIdx + 1; eastTreeIdx < currentRow.length; eastTreeIdx++) {
                if (currentRow[eastTreeIdx] >= currentTree &&
                    currentRow[eastTreeIdx] !== '0')
                    isVisibleFromEast = false;
            }
            // Look 'West'
            let isVisibleFromWest = true;
            for (let westTreeIdx = treeIdx - 1; westTreeIdx >= 0; westTreeIdx--) {
                // console.log('west tree: ', currentRow[westTreeIdx])
                if (currentRow[westTreeIdx] >= currentTree &&
                    currentRow[westTreeIdx] !== '0')
                    isVisibleFromWest = false;
            }
            // Look 'South'
            let isVisibleFromSouth = true;
            for (let nextRowNum = rowNum + 1; nextRowNum < rows.length; nextRowNum++) {
                if (rows[nextRowNum][treeIdx] >= currentTree &&
                    rows[nextRowNum][treeIdx] !== '0')
                    isVisibleFromSouth = false;
            }
            const isVisible = isVisibleFromNorth || isVisibleFromEast || isVisibleFromSouth || isVisibleFromWest;
            if (isVisible)
                countOfVisibleTrees += 1;
        }
    });
    return countOfVisibleTrees;
};
// Part 2
module.exports = { countVisibleTrees };
// console.log('answer: ', countVisibleTrees(testInput)) // 21
// console.log('answer: ', countVisibleTrees(inputData))
