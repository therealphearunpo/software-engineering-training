/*
CHALLENGE: Find Most Frequent Number

INPUT?
- arr: array of numbers

OUTPUT?
- the number that appears the most

EDGE CASES?
- not an array -> return null
- empty array -> return null
- invalid value -> return null
- duplicate values are expected
- if two numbers have the same frequency, keep the first one that reached the highest count

STEPS?
1. Check the input.
2. Create an empty object to count frequency.
3. Loop through the array.
4. Increase the count for each number.
5. Track the number with the highest frequency.
6. Return that number.

TIME COMPLEXITY?
- O(n)
*/

const arr = [1, 1, 2, 3, 3, 3];

function findMostFrequentNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    const frequency = {};
    let mostFrequentNumber = null;
    let highestCount = 0;

    for (let i = 0; i < arr.length; i++) {
        const currentNumber = arr[i];

        if (typeof currentNumber !== "number" || Number.isNaN(currentNumber)) {
            return null;
        }

        if (frequency[currentNumber] === undefined) {
            frequency[currentNumber] = 1;
        } else {
            frequency[currentNumber]++;
        }

        if (frequency[currentNumber] > highestCount) {
            highestCount = frequency[currentNumber];
            mostFrequentNumber = currentNumber;
        }
    }

    return mostFrequentNumber;
}

console.log(findMostFrequentNumber(arr));
