// Problem: Check if a string contains a character without using includes()
//
// Step 1: validate the input
// Step 2: loop through the string one character at a time
// Step 3: compare each character with the target character
// Step 4: return true if found, otherwise return false
//
// Edge cases:
// - input is not a string
// - target is not a single character
// - string is empty

function hasChar(str, ch) {
  if (typeof str !== "string" || typeof ch !== "string" || ch.length !== 1) {
    return false;
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ch) {
      return true;
    }
  }

  return false;
}

console.log(hasChar("javascript", "s"));
console.log(hasChar("javascript", "z"));
