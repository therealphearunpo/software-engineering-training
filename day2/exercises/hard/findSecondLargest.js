// Problem: Find the second largest unique number in an array
//
// Step 1: assume the first two best values are very small
// Step 2: loop through the array once
// Step 3: update the largest and second largest values when needed
// Step 4: return the second largest unique value
//
// Edge cases:
// - input is not an array
// - array length is less than 2
// - all values are the same
// - array contains negative numbers

function findSecondLargest(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 2) {
    return null;
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (typeof currentNumber !== "number") {
      return null;
    }

    if (currentNumber > largest) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest && currentNumber < largest) {
      secondLargest = currentNumber;
    }
  }

  if (secondLargest === -Infinity) {
    return null;
  }

  return secondLargest;
}

console.log(findSecondLargest([10, 5, 8, 20]));
