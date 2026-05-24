/*
CHALLENGE: Rotate Array Right Once

INPUT?
- arr: array of values

OUTPUT?
- a new array rotated right once

EDGE CASES?
- not an array -> return null
- empty array -> return []
- one value -> return the same value in a new array

STEPS?
1. Check the input.
2. Create a new array with the same length.
3. Put the last value into index 0.
4. Shift every other value one step to the right.
5. Return the new array.

TIME COMPLEXITY?
- O(n)
*/

const arr = [1, 2, 3, 4];

function rotateRightOnce(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    if (arr.length === 0) {
        return [];
    }

    const rotated = new Array(arr.length);
    rotated[0] = arr[arr.length - 1];

    for (let i = 0; i < arr.length - 1; i++) {
        rotated[i + 1] = arr[i];
    }

    return rotated;
}

console.log(rotateRightOnce(arr));
