/*
INPUT?
- arr: array of values

OUTPUT?
- new array without duplicate values

EDGE CASES?
- not an array -> return null
- empty array -> return []
- mixed values are allowed
- keep the first version of each value

STEPS?
1. Check the input.
2. Create an empty result array.
3. Loop through the input array.
4. Check whether the current value already exists in result.
5. If it does not exist, add it.
6. Return result.

TIME COMPLEXITY?
- O(n^2) because of nested loops
*/

const arr = [1, 2, 2, 3, 3];

function removeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (arr[i] === result[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(removeDuplicates(arr));
