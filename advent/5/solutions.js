const { inputData } = require("./input");

// const stacks = [
//   [],
//   ['W', 'T', 'H', 'P', 'J', 'C', 'F'],
//   ['H', 'B', 'J', 'Z', 'F', 'V', 'R', 'G'],
//   ['R', 'T', 'P', 'H'],
//   ['T', 'H', 'P', 'N', 'S', 'Z'],
//   ['D', 'C', 'J', 'H', 'Z', 'F', 'V', 'N'],
//   ['Z', 'D', 'W', 'F', 'G', 'M', 'P'],
//   ['P', 'D', 'J', 'S', 'W', 'Z', 'V', 'M'],
//   ['S', 'D', 'N'],
//   ['M', 'F', 'S', 'Z', 'D']
// ];

// Part 1
const getTopCratesAfterArrangement = (input) => {
  const stacks = [
    [],
    ['W', 'T', 'H', 'P', 'J', 'C', 'F'],
    ['H', 'B', 'J', 'Z', 'F', 'V', 'R', 'G'],
    ['R', 'T', 'P', 'H'],
    ['T', 'H', 'P', 'N', 'S', 'Z'],
    ['D', 'C', 'J', 'H', 'Z', 'F', 'V', 'N'],
    ['Z', 'D', 'W', 'F', 'G', 'M', 'P'],
    ['P', 'D', 'J', 'S', 'W', 'Z', 'V', 'M'],
    ['S', 'D', 'N'],
    ['M', 'F', 'S', 'Z', 'D']
  ];

  const instructions = input.split('\n');

  let elementToMove = '';
  let idx = 0;
  while (elementToMove !== undefined) {
    const instruction = instructions[idx];
    const [firstHalf, secondHalf] = instruction.split(' from ');
    const moveCount = Number(firstHalf.slice(-1));
    const startingStack = Number(secondHalf[0]);
    const destinationStack = Number(secondHalf.slice(-1));

    console.log('moveCount: ', moveCount);
    console.log('startingStack: ', startingStack);
    console.log('destinationStack: ', destinationStack);    
    console.log('stacks: ', stacks)
    for (let i = 0; i < moveCount; i++) {
      // console.log('moved')
      elementToMove = stacks[startingStack].pop();
      stacks[destinationStack].push(elementToMove);
      // console.log('stacks: ', stacks)
    }
    idx += 1;
  }



  // for (const instruction of instructions) {
  //   const [firstHalf, secondHalf] = instruction.split(' from ');
  //   const moveCount = Number(firstHalf.slice(-1));
  //   const startingStack = Number(secondHalf[0]);
  //   const destinationStack = Number(secondHalf.slice(-1));

  //   for (let i = 0; i < moveCount; i++) {
  //     const elementToMove = stacks[startingStack].pop();
  //     if (elementToMove === undefined) {
  //       console.log('stacks: ', stacks)
  //       console.log('moveCount: ', moveCount);
  //       console.log('startingStack: ', startingStack);
  //       console.log('destinationStack: ', destinationStack);
  //     }
  //     stacks[destinationStack].push(elementToMove);
  //     // console.log('stacks[destination]: ', stacks[destination]);
  //   }
  // }

  console.log('stacks: ', stacks)
  let answer = '';
  for (let x = 1; x < stacks.length; x++) {
    answer += stacks[x][stacks[x].length - 1];
  }
  return answer;
}

// Part 2


module.exports = { getTopCratesAfterArrangement };

console.log('answer: ', getTopCratesAfterArrangement(inputData));
