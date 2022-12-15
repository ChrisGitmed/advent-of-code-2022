"use strict";
const hash = {
    a: 1, b: 2, c: 3, d: 4, e: 5,
    f: 6, g: 7, h: 8, i: 9, j: 10,
    k: 11, l: 12, m: 13, n: 14, o: 15,
    p: 16, q: 17, r: 18, s: 19, t: 20,
    u: 21, v: 22, w: 23, x: 24, y: 25,
    z: 26, A: 27, B: 28, C: 29, D: 30,
    E: 31, F: 32, G: 33, H: 34, I: 35,
    J: 36, K: 37, L: 38, M: 39, N: 40,
    O: 41, P: 42, Q: 43, R: 44, S: 45,
    T: 46, U: 47, V: 48, W: 49, X: 50,
    Y: 51, Z: 52
};
// Part 1
const sumOfPriorities = (input) => {
    const rucksacks = input.split('\n');
    let sum = 0;
    for (const rucksack of rucksacks) {
        const middle = rucksack.length / 2;
        const leftCompartment = rucksack.slice(0, middle);
        const rightCompartment = rucksack.slice(middle);
        for (const char of leftCompartment) {
            if (rightCompartment.includes(char)) {
                sum += hash[char];
                break;
            }
        }
    }
    return sum;
};
// Part 2
const sumOfBadgePriorities = (input) => {
    const rucksacks = input.split('\n');
    const groups = [];
    for (let i = 0; i < rucksacks.length; i += 3)
        groups.push(rucksacks.slice(i, i + 3));
    let sum = 0;
    for (const group of groups) {
        for (const char of group[0]) {
            if (group[1].includes(char) && group[2].includes(char)) {
                sum += hash[char];
                break;
            }
        }
    }
    return sum;
};
module.exports = { sumOfPriorities, sumOfBadgePriorities };
