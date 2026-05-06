// Remove duplicate values
// Step 1: take the array
// Step 2: use Set because Set keeps unique values
// Step 3: change it back to array

function removeDuplicates(numbers) {
  return [...new Set(numbers)];
}

console.log(removeDuplicates([1, 2, 2, 3, 3]));
