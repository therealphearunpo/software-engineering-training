# Engineering Test

## Q1

```js
let arr = [1, 2, 3];
arr[5] = 10;
console.log(arr.length);
```

Answer: `6`

Why:
- JavaScript arrays grow when you assign a value to a later index.
- Index `5` means the array now needs positions `0` to `5`.

## Q2

```js
arr.push();
arr.pop();
```

Answer:
- `push()` adds a value to the end of an array.
- `pop()` removes the last value from an array.

## Q3

Problem:

```js
// Find the missing number
// Example: [1, 2, 3, 5] -> 4
```

Thinking:

```js
// INPUT? array of numbers in order
// OUTPUT? the missing number
// EDGE CASES? empty array, invalid input
// STEPS? compare each value with the number we expect
// TIME COMPLEXITY? O(n)
```

Answer:

```js
function findMissingNumber(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }

    for (let i = 0; i < arr.length; i++) {
        const expectedNumber = i + 1;

        if (arr[i] !== expectedNumber) {
            return expectedNumber;
        }
    }

    return arr.length + 1;
}
```

Why:
- At index `0`, we expect `1`
- At index `1`, we expect `2`
- At index `2`, we expect `3`
- At index `3`, we expect `4`, but the array has `5`
- So the missing number is `4`
