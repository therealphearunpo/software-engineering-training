/*
INPUT?
- arr: array of numbers

OUTPUT?
- smallest number in the array

EDGE CASES?
- not an array -> return null
- empty array -> return null
- invalid value inside array -> return null
- negative numbers are allowed

STEPS?
1. Check the input.
2. Assume the first value is the smallest.
3. Compare it with the rest of the values.
4. Update the smallest value when needed.
5. Return the answer.

TIME COMPLEXITY?
- O(n)
*/

const arr = [7, 2, 9, 1];

function findMin(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    let min = arr[0];

    if (typeof min !== "number" || Number.isNaN(min)) {
        return null;
    }

    for (let i = 1; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || Number.isNaN(arr[i])) {
            return null;
        }

        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
}

console.log(findMin(arr));
