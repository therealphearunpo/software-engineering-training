// Find factorial
// Step 1: start result = 1
// Step 2: multiply from n until 1
// Step 3: return the answer

function factorial(n) {
  let result = 1;

  for (let i = n; i > 0; i--) {
    result *= i;
  }

  return result;
}

console.log(factorial(9));
