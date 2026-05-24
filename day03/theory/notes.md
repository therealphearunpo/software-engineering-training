# Day 3 Notes

## 1. What is an array?
- An array stores multiple values in one ordered list.
- Example:

```js
const numbers = [10, 20, 30];
```

## 2. Access array values
- Syntax: `arrayName[index]`
- Arrays start at index `0`

```js
console.log(numbers[0]); // 10
console.log(numbers[1]); // 20
```

## 3. Update array values
- Syntax: `arrayName[index] = newValue`

```js
numbers[1] = 99;
console.log(numbers); // [10, 99, 30]
```

## 4. Loop through arrays
- `for` loop:

```js
for (let i = 0; i < numbers.length; i++) {
    console.log("Index:", i, "Value:", numbers[i]);
}
```

- `while` loop:

```js
let i = 0;

while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
}
```

- `for...of` loop:

```js
for (const number of numbers) {
    console.log(number);
}
```

## 5. Important array edge cases
- Empty array: `[]`
- One value: `[5]`
- Duplicate values: `[1, 1, 2, 2]`
- Negative numbers: `[-1, -5, 3]`
- Invalid input: `"hello"` or `null`

## 6. Engineering thinking before coding
Write these comments before you solve a problem:

```js
// INPUT?
// OUTPUT?
// EDGE CASES?
// STEPS?
// TIME COMPLEXITY?
```

## 7. Example thinking for array problems
- Input:
  an array of numbers
- Output:
  maybe the sum, smallest number, or duplicate-free array
- Edge cases:
  empty array, invalid input, duplicate values, negative numbers
- Steps:
  solve the problem in simple order before writing code
- Time complexity:
  check whether you use one loop `O(n)` or nested loops `O(n^2)`

## 8. Why this matters
- Syntax helps you write code.
- Problem solving helps you design correct code.
- Engineering thinking helps your code survive edge cases.
