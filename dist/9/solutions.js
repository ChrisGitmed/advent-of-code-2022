// Part 1
export const getCountOfVisitedPositionsOne = (input) => {
    const steps = input.split('\n');
    const ropeLength = 2;
    const rope = Array.from(Array(ropeLength), () => [0, 0]);
    const [head, tail] = rope;
    const tailPositions = new Set(['0,0']);
    for (const movement of steps) {
        const [direction, moveCount] = movement.split(' ');
        for (let i = 0; i < +moveCount; i++) {
            if (direction === 'L')
                head[0]--;
            if (direction === 'U')
                head[1]++;
            if (direction === 'R')
                head[0]++;
            if (direction === 'D')
                head[1]--;
            for (let j = 1; j < ropeLength; j++) {
                const knot = rope[j];
                const prev = rope[rope.indexOf(knot) - 1];
                const distance = [knot[0] - prev[0], knot[1] - prev[1]];
                if (distance.every((coordinate) => Math.abs(coordinate) <= 1))
                    continue;
                knot[0] -= Math.sign(distance[0]);
                knot[1] -= Math.sign(distance[1]);
                if (knot === tail)
                    tailPositions.add(knot.join(','));
            }
        }
    }
    return tailPositions.size;
};
// Part 2
export const getCountOfVisitedPositionsTwo = (input) => {
    const steps = input.split('\n');
    const ropeLength = 10;
    const rope = Array.from(Array(ropeLength), () => [0, 0]);
    const head = rope[0];
    const tail = rope.at(-1);
    const tailPositions = new Set(['0,0']);
    // steps.forEach((movement) => {
    for (const movement of steps) {
        const [direction, amount] = movement.split(' ');
        for (let i = 0; i < +amount; i++) {
            if (direction === 'L')
                head[0]--;
            if (direction === 'U')
                head[1]++;
            if (direction === 'R')
                head[0]++;
            if (direction === 'D')
                head[1]--;
            for (let j = 1; j < ropeLength; j++) {
                const knot = rope[j];
                const prev = rope[rope.indexOf(knot) - 1];
                const distance = [knot[0] - prev[0], knot[1] - prev[1]];
                if (distance.every((coordinate) => Math.abs(coordinate) <= 1))
                    continue;
                knot[0] -= Math.sign(distance[0]);
                knot[1] -= Math.sign(distance[1]);
                if (knot === tail)
                    tailPositions.add(knot.join(','));
            }
        }
    }
    return tailPositions.size;
};
