// Part 1
const getHighestCalories = (data) => data.split('\n\n')
  .map((item) => item.split('\n')
  .map((str) => parseInt(str, 10)))
  .map((numArr) => numArr.reduce((a, b) => a + b, 0))
  .sort((a, b) => b - a)[0];

// Part 2
const getThreeHighestCalories = (data) => data
  .split('\n\n')
  .map((item) => item.split('\n')
  .map((strArr) => parseInt(strArr, 10)))
  .map((numArr) => numArr.reduce((a, b) => a + b, 0))
  .sort((a, b) => b - a)
  .slice(0,3)
  .reduce((a, b) => a + b, 0);

module.exports = { getHighestCalories, getThreeHighestCalories };
