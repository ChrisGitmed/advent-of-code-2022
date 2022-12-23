const testInput = `30373
25512
65332
33549
35390`;
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
export const getLargestScenicScore = (input) => {
    const rows = input.split('\n');
    let largestScore = -Infinity;
    for (let rowNum = 0; rowNum < rows.length; rowNum += 1) {
        const currentRow = rows[rowNum];
        for (let treeIdx = 0; treeIdx < rows[rowNum].length; treeIdx += 1) {
            const currentTree = currentRow[treeIdx];
            // Find north score
            let northScore = 0;
            for (let prevRowNum = rowNum - 1; prevRowNum >= 0; prevRowNum--) {
                const previousRow = rows[prevRowNum];
                const compareTree = previousRow[treeIdx];
                if (compareTree >= currentTree) {
                    northScore += 1;
                    break;
                }
                northScore += 1;
            }
            // Find east score
            let eastScore = 0;
            for (let eastTreeIdx = treeIdx + 1; eastTreeIdx < currentRow.length; eastTreeIdx++) {
                const compareTree = currentRow[eastTreeIdx];
                if (compareTree >= currentTree) {
                    eastScore += 1;
                    break;
                }
                eastScore += 1;
            }
            // Find south score
            let southScore = 0;
            for (let nextRowNum = rowNum + 1; nextRowNum < rows.length; nextRowNum++) {
                const nextRow = rows[nextRowNum];
                const compareTree = nextRow[treeIdx];
                if (compareTree >= currentTree) {
                    southScore += 1;
                    break;
                }
                ;
                southScore += 1;
            }
            // Find west score
            let westScore = 0;
            for (let westTreeIdx = treeIdx - 1; westTreeIdx >= 0; westTreeIdx--) {
                const compareTree = currentRow[westTreeIdx];
                if (compareTree >= currentTree) {
                    westScore += 1;
                    break;
                }
                ;
                westScore += 1;
            }
            const totalScore = northScore * eastScore * southScore * westScore;
            if (totalScore > largestScore)
                largestScore = totalScore;
        }
    }
    return largestScore;
};
