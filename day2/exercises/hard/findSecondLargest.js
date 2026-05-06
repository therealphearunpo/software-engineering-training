// Find second largest number
// Step 1: keep largest value
// Step 2: keep second largest value
// Step 3: update them while looping
// Step 4: return second largest

function findSecondLargest(numbers) {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber > largest) {
      secondLargest = largest;
      largest = currentNumber;
    } else if (currentNumber > secondLargest && currentNumber < largest) {
      secondLargest = currentNumber;
    }
  }

  return secondLargest;
}

console.log(findSecondLargest([10, 5, 8, 20]));
