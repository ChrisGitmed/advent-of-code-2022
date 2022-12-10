// Part 1
const getTotalScore = (input) => {
  const split = input.split('\n');

  let score = 0
  for (const str of split) {
    switch (str[2]) {
      case 'X':
        score += 1
        if (str[0] === 'A') score += 3;
        if (str[0] === 'C') score += 6;
        break;

      case 'Y':
        score += 2
        if (str[0] === 'B') score += 3;
        if (str[0] === 'A') score += 6;
        break;

      case 'Z':
        score += 3
        if (str[0] === 'C') score += 3;
        if (str[0] === 'B') score += 6;
        break;
    }
  }
  return score;
};

// Part 2
const getTotalScore2 = (input) => {
  const split = input.split('\n');

  let score = 0;
  for (const str of split) {
    switch (str[0]) {
      case 'A':
        break;
      case 'B':
        break;
      case 'C':
        break;
    }
  }
}

module.exports = { getTotalScore, getTotalScore2 };
