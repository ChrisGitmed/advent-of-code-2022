// Part 1
const getHighestCalories = (data) => {
  const firstSplit = data.split('\n\n');
  const secondSplit = firstSplit.map((item) => item.split('\n').map((str) => parseInt(str, 10)));
  
  let max = -Infinity;
  for (const elf of secondSplit) {
    const sumOfCalories = elf.reduce((a, b) => a + b, 0);
    if (sumOfCalories > max) max = sumOfCalories;
  }
  return max;
};

// Part 2
const getThreeHighestCalories = (data) => {
  return data
    .split('\n\n')
    .map((item) => item.split('\n')
    .map((strArr) => parseInt(strArr, 10)))
    .map((numArr) => numArr.reduce((a, b) => a + b, 0))
    .sort((a, b) => b - a)
    .slice(0,3)
    .reduce((a, b) => a + b, 0)
};

module.exports = { getHighestCalories, getThreeHighestCalories };
