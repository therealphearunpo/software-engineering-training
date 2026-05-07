// Problem: Remove duplicate values from an array
//
// Step 1: create a new array for unique values
// Step 2: loop through the original array
// Step 3: only push a value if it is not already saved
//
// Edge cases:
// - input is not an array
// - empty array should return []

function removeDuplicates(numbers) {
  if (!Array.isArray(numbers)) {
    return [];
  }

  const uniqueNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (!uniqueNumbers.includes(currentNumber)) {
      uniqueNumbers.push(currentNumber);
    }
  }

  return uniqueNumbers;
}

console.log(removeDuplicates([1, 2, 2, 3, 3]));
