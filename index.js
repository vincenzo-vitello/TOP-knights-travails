function knightMoves(start, end) {
    if(start[0] === end[0] && start[1] === end[1]) {
        console.log(`You made it in 0 moves! Here's your path: \n[${start}]`);
        return [start];
    }

    const possibleMoves = [
        [2, 1], 
        [1, 2], 
        [-1, 2], 
        [-2, 1], 
        [-2, -1], 
        [-1, -2], 
        [1, -2], 
        [2, -1]
    ]

    const queue = [[start, [start]]];
    const visited = new Set(); // a Set is a data structure which stores unique values. It's similar to an array but it doesnt allow for duplicates and offers methods to check if a value is present and to add or remove values.
    visited.add(start.toString());

    while(queue.length > 0) {
        const [currentPosition, path] = queue.shift();

        for(const [dx, dy] of possibleMoves) {
            const newX = currentPosition[0] + dx;
            const newY = currentPosition[1] + dy;
            const newPosition = [newX, newY];

            if(newX >= 0 && newX < 8 && newY >= 0 && newY < 8 && !visited.has(newPosition.toString())) {
                const newPath = [...path, newPosition];

                if(newX === end[0] && newY === end[1]) {
                    console.log(`You made it in ${newPath.length - 1} moves! Here's your path:`);
                    newPath.forEach(pos => console.log(`[${pos}]`));
                    return newPath;
                }
                queue.push([newPosition, newPath]);
                visited.add(newPosition.toString())
            }
        }
    }
    return null
}

knightMoves([0, 0], [3, 3]);
knightMoves([0, 0], [7, 7]);
knightMoves([1,1], [1,1]);