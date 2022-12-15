"use strict";
// Part 1
const getFirstPacketMarker = (input) => {
    for (let i = 4; i < input.length; i++) {
        if (new Set(input.slice(i - 4, i)).size === 4)
            return i;
    }
};
// Part 2
const getFirstMessageMarker = (input) => {
    for (let i = 14; i < input.length; i++) {
        if (new Set(input.slice(i - 14, i)).size === 14)
            return i;
    }
};
module.exports = { getFirstPacketMarker, getFirstMessageMarker };
