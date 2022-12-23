// Part 1
export const getFirstPacketMarker = (input) => {
    for (let i = 4; i < input.length; i++) {
        if (new Set(input.slice(i - 4, i)).size === 4)
            return i;
    }
};
// Part 2
export const getFirstMessageMarker = (input) => {
    for (let i = 14; i < input.length; i++) {
        if (new Set(input.slice(i - 14, i)).size === 14)
            return i;
    }
};
