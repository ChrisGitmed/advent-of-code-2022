// --- Part Two ---
// By the time you calculate the answer to the Elves' question, they've already
// realized that the Elf carrying the most Calories of food might eventually
// run out of snacks.
//
// To avoid this unacceptable situation, the Elves would instead like to know the
// total Calories carried by the top three Elves carrying the most Calories. That
// way, even if one of those Elves runs out of snacks, they still have two backups.
//
// In the example above, the top three Elves are the fourth Elf (with 24000 Calories),
// then the third Elf (with 11000 Calories), then the fifth Elf (with 10000 Calories).
// The sum of the Calories carried by these three elves is 45000.
//
// Find the top three Elves carrying the most Calories. How many Calories are those
// Elves carrying in total?
//
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

module.exports = { getThreeHighestCalories };

// parse data
// map to array of subarrays
// map the string sub-arrays to number arrays
// map the number sub-arrays to the sum of the numbers within, flattening the array
// sort in descending order
// slice out the first three indexes
// reduce the sum