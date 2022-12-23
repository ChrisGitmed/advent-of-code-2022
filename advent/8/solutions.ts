// Part 1
export const countVisibleTrees = (input: string) => {
  const rows = input.split('\n');
  let countOfVisibleTrees = 0;

  rows.forEach((currentRow: string, rowNum: number) => {
    for (let treeIdx = 0; treeIdx < currentRow.length; treeIdx++) {
      const currentTree:string = currentRow[treeIdx];

      // Look 'North'
      let isVisibleFromNorth = true;
      for (let prevRowNum = rowNum - 1; prevRowNum >= 0; prevRowNum--) {
        const previousRow = rows[prevRowNum];
        const compareTree = previousRow[treeIdx];
        if (compareTree >= currentTree) isVisibleFromNorth = false;
      }

      // Look 'East'
      let isVisibleFromEast = true
      for (let eastTreeIdx = treeIdx + 1; eastTreeIdx < currentRow.length; eastTreeIdx++) {
        const compareTree = currentRow[eastTreeIdx];
        if (compareTree >= currentTree) isVisibleFromEast = false;
      }

      // Look 'West'
      let isVisibleFromWest = true
      for (let westTreeIdx = treeIdx - 1; westTreeIdx >= 0; westTreeIdx--) {
        const compareTree = currentRow[westTreeIdx];
        if (compareTree >= currentTree) isVisibleFromWest = false;
      }

      // Look 'South'
      let isVisibleFromSouth = true;
      for (let nextRowNum = rowNum + 1; nextRowNum < rows.length; nextRowNum++) {
        const nextRow = rows[nextRowNum];
        const compareTree = nextRow[treeIdx];
        if (compareTree >= currentTree) isVisibleFromSouth = false;
      }

      const isVisible = isVisibleFromNorth || isVisibleFromEast || isVisibleFromSouth || isVisibleFromWest;
      if (isVisible) countOfVisibleTrees += 1;
    }
  })
  return countOfVisibleTrees;
}

// Part 2
export const getLargestScenicScore = (input: string) => {
  const rows = input.split('\n');

  let largestScore = -Infinity;
  for (let rowNum = 0; rowNum < rows.length; rowNum += 1) {
    const currentRow = rows[rowNum];
    for (let treeIdx = 0; treeIdx < rows[rowNum].length; treeIdx += 1) {
      const currentTree = currentRow[treeIdx];

      // Find north score
      let northScore = 0;
      for (let prevRowNum = rowNum - 1; prevRowNum >= 0; prevRowNum--) {
        northScore += 1;
        const previousRow = rows[prevRowNum];
        const compareTree = previousRow[treeIdx];
        if (compareTree >= currentTree) break;
      }

      // Find east score
      let eastScore = 0;
      for (let eastTreeIdx = treeIdx + 1; eastTreeIdx < currentRow.length; eastTreeIdx++) {
        eastScore += 1;
        const compareTree = currentRow[eastTreeIdx];
        if (compareTree >= currentTree) break;
      }

      // Find south score
      let southScore = 0;
      for (let nextRowNum = rowNum + 1; nextRowNum < rows.length; nextRowNum++) {
        southScore += 1;
        const nextRow = rows[nextRowNum];
        const compareTree = nextRow[treeIdx];
        if (compareTree >= currentTree) break;
      }

      // Find west score
      let westScore = 0;
      for (let westTreeIdx = treeIdx - 1; westTreeIdx >= 0; westTreeIdx--) {
        westScore += 1
        const compareTree = currentRow[westTreeIdx];
        if (compareTree >= currentTree) break;
      }

      const totalScore = northScore * eastScore * southScore * westScore;

      if (totalScore > largestScore) largestScore = totalScore;
    }
  }
  return largestScore;
}
