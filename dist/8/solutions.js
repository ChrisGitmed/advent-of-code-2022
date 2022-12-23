// Part 1
export const countVisibleTrees = (input) => {
    const rows = input.split('\n');
    let countOfVisibleTrees = 0;
    rows.forEach((currentRow, rowNum) => {
        for (let treeIdx = 0; treeIdx < currentRow.length; treeIdx++) {
            const currentTree = currentRow[treeIdx];
            // Look 'North'
            let isVisibleFromNorth = true;
            for (let prevRowNum = rowNum - 1; prevRowNum >= 0; prevRowNum--) {
                const previousRow = rows[prevRowNum];
                const compareTree = previousRow[treeIdx];
                if (compareTree >= currentTree)
                    isVisibleFromNorth = false;
            }
            // Look 'East'
            let isVisibleFromEast = true;
            for (let eastTreeIdx = treeIdx + 1; eastTreeIdx < currentRow.length; eastTreeIdx++) {
                const compareTree = currentRow[eastTreeIdx];
                if (compareTree >= currentTree)
                    isVisibleFromEast = false;
            }
            // Look 'West'
            let isVisibleFromWest = true;
            for (let westTreeIdx = treeIdx - 1; westTreeIdx >= 0; westTreeIdx--) {
                const compareTree = currentRow[westTreeIdx];
                if (compareTree >= currentTree)
                    isVisibleFromWest = false;
            }
            // Look 'South'
            let isVisibleFromSouth = true;
            for (let nextRowNum = rowNum + 1; nextRowNum < rows.length; nextRowNum++) {
                const nextRow = rows[nextRowNum];
                const compareTree = nextRow[treeIdx];
                if (compareTree >= currentTree)
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
// console.log('answer: ', countVisibleTrees(inputData))
