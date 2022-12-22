import { inputData } from './input.js';
const testInput = `30373
25512
65332
33549
35390`;

// Part 1
export const countVisibleTrees = (input: string) => {
  console.log('input:\n', input, '\n');
  const rows = input.split('\n');
  let countOfVisibleTrees = 0;

  // Loop over each row
  rows.forEach((currentRow: string, rowNum: number) => {
    console.log('currentRow: ', currentRow)
    for (let treeIdx = 0; treeIdx < currentRow.length; treeIdx++) {
      // const currentTree:number = parseInt(currentRow[treeIdx], 10);
      const currentTree:string = currentRow[treeIdx];
      console.log('currentTree: ', currentTree);

      // Look 'North'
      let isVisibleFromNorth = true;
      // console.log('rowNum: ', rowNum);
      // console.log('treeIdx: ', treeIdx);
      for (let prevRowNum = rowNum; prevRowNum > 0; prevRowNum--) {
        // console.log('prevRowNum: ', prevRowNum)
        if (
          rows[prevRowNum - 1][treeIdx] >= currentTree &&
          rows[prevRowNum - 1][treeIdx] !== '0'
        ) isVisibleFromNorth = false;
      }

      // Look 'East'
      let isVisibleFromEast = true
      for (let eastTreeIdx = treeIdx + 1; eastTreeIdx < currentRow.length; eastTreeIdx++) {
        if (
          currentRow[eastTreeIdx] >= currentTree &&
          currentRow[eastTreeIdx] !== '0'
        ) isVisibleFromEast = false;
      }

      // Look 'West'
      let isVisibleFromWest = true
      for (let westTreeIdx = treeIdx - 1; westTreeIdx >= 0; westTreeIdx--) {
        // console.log('west tree: ', currentRow[westTreeIdx])
        
        if (
          currentRow[westTreeIdx] >= currentTree &&
          currentRow[westTreeIdx] !== '0'
        ) isVisibleFromWest = false;
      }

      // Look 'South'
      let isVisibleFromSouth = true;
      for (let nextRowNum = rowNum + 1; nextRowNum < rows.length; nextRowNum++) {
        if (
          rows[nextRowNum][treeIdx] >= currentTree &&
          rows[nextRowNum][treeIdx] !== '0'
        ) isVisibleFromSouth = false;
      }

      const isVisible = isVisibleFromNorth || isVisibleFromEast || isVisibleFromSouth || isVisibleFromWest;
      if (isVisible) countOfVisibleTrees += 1;
    }
  })
  return countOfVisibleTrees;
}

// Part 2

console.log('answer: ', countVisibleTrees(testInput)) // 21
console.log('answer: ', countVisibleTrees(inputData)) // 
