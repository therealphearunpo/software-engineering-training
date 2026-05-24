/*
INPUT?
- arr: array of numbers

OUTPUT?
- total sum of all numbers

EDGE CASES?
- not an array -> return null
- empty array -> return 0
- invalid value inside array -> return null

STEPS?
1. Check the input.
2. Start total at 0.
3. Loop through each number.
4. Add each number into total.
5. Return total.

TIME COMPLEXITY?
- O(n)
*/

const arr = [1, 2, 3, 4];

function sumArray(arr) {
    if (!Array.isArray(arr)) {
        return null;
    }

    if (arr.length === 0) {
        return 0;
    }

    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number" || Number.isNaN(arr[i])) {
            return null;
        }

        total += arr[i];
    }

    return total;
}

console.log(sumArray(arr));
