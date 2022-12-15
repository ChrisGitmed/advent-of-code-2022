"use strict";
// Part 1
const getTopCrates = (input) => {
    const stacks = [
        [],
        ['F', 'C', 'J', 'P', 'H', 'T', 'W'],
        ['G', 'R', 'V', 'F', 'Z', 'J', 'B', 'H'],
        ['H', 'P', 'T', 'R'],
        ['Z', 'S', 'N', 'P', 'H', 'T'],
        ['N', 'V', 'F', 'Z', 'H', 'J', 'C', 'D'],
        ['P', 'M', 'G', 'F', 'W', 'D', 'Z'],
        ['M', 'V', 'Z', 'W', 'S', 'J', 'D', 'P'],
        ['N', 'D', 'S'],
        ['D', 'Z', 'S', 'F', 'M']
    ];
    const instructions = input.split('\n');
    for (const instruction of instructions) {
        const [firstHalf, secondHalf] = instruction.split(' from ');
        const [, moveStr] = firstHalf.split(' ');
        const moveCount = Number(moveStr);
        const startingStack = Number(secondHalf[0]);
        const destinationStack = Number(secondHalf.slice(-1));
        for (let i = 0; i < moveCount; i++) {
            const elementToMove = stacks[startingStack].pop();
            stacks[destinationStack].push(elementToMove);
        }
    }
    let topCrates = '';
    for (let x = 1; x < stacks.length; x++) {
        topCrates += stacks[x][stacks[x].length - 1];
    }
    return topCrates;
};
// Part 2
const getTopCratesTwo = (input) => {
    const stacks = [
        [],
        ['F', 'C', 'J', 'P', 'H', 'T', 'W'],
        ['G', 'R', 'V', 'F', 'Z', 'J', 'B', 'H'],
        ['H', 'P', 'T', 'R'],
        ['Z', 'S', 'N', 'P', 'H', 'T'],
        ['N', 'V', 'F', 'Z', 'H', 'J', 'C', 'D'],
        ['P', 'M', 'G', 'F', 'W', 'D', 'Z'],
        ['M', 'V', 'Z', 'W', 'S', 'J', 'D', 'P'],
        ['N', 'D', 'S'],
        ['D', 'Z', 'S', 'F', 'M']
    ];
    const instructions = input.split('\n');
    for (const instruction of instructions) {
        const [firstHalf, secondHalf] = instruction.split(' from ');
        const [, moveStr] = firstHalf.split(' ');
        const moveCount = Number(moveStr);
        const startingStack = Number(secondHalf[0]);
        const destinationStack = Number(secondHalf.slice(-1));
        const elementsToMove = stacks[startingStack].splice(-moveCount, moveCount);
        stacks[destinationStack].push(...elementsToMove);
    }
    let topCrates = '';
    for (let x = 1; x < stacks.length; x++) {
        topCrates += stacks[x][stacks[x].length - 1];
    }
    return topCrates;
};
module.exports = { getTopCrates, getTopCratesTwo };
