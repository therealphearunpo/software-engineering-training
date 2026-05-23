>>> Day 3 <<<

1. What is an Array?
- Definition: An array is a list that stores multiple values in order.
- Example: let numbers = [10, 20, 30];

2. Access Array Values
- Syntax: arrayName[index]
- Example: console.log(numbers[0]); // Output: 10
- Example: console.log(numbers[1]); // Output: 20
- Note: Index starts at 0.

3. Update Array Values
- Syntax: arrayName[index] = newValue
- Example: numbers[1] = 99; 
- Result: [10, 99, 30]
- Example: console.log(numbers[1]); // Output: 99

4. Loop Through Arrays
- Using for loop:
  for (let i = 0; i < numbers.length; i++) {
    console.log("Index: " + i + " -> Value: " + numbers[i]);
  }

- Using while loop:
  let i = 0;
  while (i < numbers.length) {
    console.log("Index: " + i + " -> Value: " + numbers[i]);
    i++;
  }

- Using for...of loop:
  for (let n of numbers) {
    console.log(n);
  }

5. Practice Examples
- Update array value:
  let numbers = [10, 20, 30];
  numbers[1] = 99;
  // Result: [10, 99, 30]

- Empty array:
  let numbers2 = [];
  console.log(numbers2);

- One value:
  let numbers3 = [1];
  console.log(numbers3[0]); // Output: 1

- Duplicate values:
  let numbers4 = [1, 1, 2, 2, 3];
  console.log(numbers4[1]); // Output: 1

# ENGINEERING THINKING #
The core of software engineer is before solving any problem:
//Input? What's input need?
//Output? What's the expected ouput?
//EDGE Case?
//Steps? What's the total steps of the process?

EDGE CASES (VERY IMPORTANT)

Examples:
[]
[5]
[-1, -5]
# What if array is empty?
If array empty it will nothing to display.

# What if only one value exists?
It's doesn't matter, if array having only one value it's will show only one value.

# What if values are duplicated?
If array having duplicate value, it's normal because the number in the list can be
duplicate but the index is can not dupicate.

