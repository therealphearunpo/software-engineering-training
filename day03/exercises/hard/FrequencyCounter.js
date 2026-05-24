/*
INPUT?
- arr: array of values

OUTPUT?
- object that stores how many times each value appears

EDGE CASES?
- not an array -> return null
- empty array -> return {}
- duplicate values should increase the count

STEPS?
1. Check the input.
2. Create an empty object.
3. Loop through the array.
4. Increase the count for each value.
5. Return the object.

TIME COMPLEXITY?
- O(n)
*/

const arr = [1, 1, 2, 3, 3, 3];

function frequencyCounter(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    const result = {};

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];

        if (result[value] === undefined) {
            result[value] = 1;
        } else {
            result[value]++;
        }
    }

    return result;
}

console.log(frequencyCounter(arr));
