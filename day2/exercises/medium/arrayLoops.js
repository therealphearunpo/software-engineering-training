// Practice array loops
// Step 1: print normal loop
// Step 2: print with for...of
// Step 3: print in reverse

const numbers = [1, 2, 3, 4];

for (let i = 0; i < numbers.length; i++) {
  console.log("Index: " + i + " -> Value: " + numbers[i]);
}

for (const value of numbers) {
  console.log("for...of value: " + value);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log("Reverse Index: " + i + " -> Value: " + numbers[i]);
}
