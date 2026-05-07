// Problem: Find the factorial of a number
//
// Step 1: start result at 1
// Step 2: multiply result by every number down to 1
// Step 3: return the final answer
//
// Edge cases:
// - input is negative
// - input is not an integer
// - 0! should return 1

function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return null;
  }

  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(factorial(9));
