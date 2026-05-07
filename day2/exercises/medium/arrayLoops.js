// Problem: Practice different ways to loop through an array
//
// Step 1: print values with a normal for loop
// Step 2: print values with for...of
// Step 3: print values in reverse order
//
// Edge cases:
// - array could be empty
// - array values can be any data type

const numbers = [1, 2, 3, 4];

if (numbers.length === 0) {
  console.log("Array is empty.");
}

for (let i = 0; i < numbers.length; i++) {
  console.log("Index: " + i + " -> Value: " + numbers[i]);
}

for (const value of numbers) {
  console.log("for...of value: " + value);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log("Reverse Index: " + i + " -> Value: " + numbers[i]);
}
