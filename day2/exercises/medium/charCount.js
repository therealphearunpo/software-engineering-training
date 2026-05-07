// Problem: Count how many times each character appears in a string
//
// Step 1: validate the input
// Step 2: create an object to store counts
// Step 3: loop through the string one character at a time
// Step 4: increase the count for each character
//
// Edge cases:
// - input is not a string
// - empty string should return an empty object
// - repeated characters should increase the existing count

function charCount(text) {
  if (typeof text !== "string") {
    return {};
  }

  const counts = {};

  for (let i = 0; i < text.length; i++) {
    const currentCharacter = text[i];

    if (counts[currentCharacter] === undefined) {
      counts[currentCharacter] = 1;
    } else {
      counts[currentCharacter]++;
    }
  }

  return counts;
}

console.log(charCount("hello"));
