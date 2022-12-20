// Part 1
export const getTotalScore = (input:string) => {
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
export const getTotalScore2 = (input:string) => {
  const split = input.split('\n');

  let score = 0;
  for (const str of split) {
    switch (str[0]) {
      case 'A':
        if (str[2] === 'X') score += 3
        if (str[2] === 'Y') score += 4
        if (str[2] === 'Z') score += 8
        break;
      case 'B':
        if (str[2] === 'X') score += 1
        if (str[2] === 'Y') score += 5
        if (str[2] === 'Z') score += 9
        break;
      case 'C':
        if (str[2] === 'X') score += 2
        if (str[2] === 'Y') score += 6
        if (str[2] === 'Z') score += 7
        break;
    }
  }
  return score;
}
