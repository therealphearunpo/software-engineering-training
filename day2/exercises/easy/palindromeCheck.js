// Problem: Check if a word reads the same from both sides
//
// Step 1: compare the first and last characters
// Step 2: move toward the center
// Step 3: if one pair is different, return false
// Step 4: if every pair matches, return true
//
// Edge cases:
// - input is not a string
// - empty string should still be treated as a palindrome

function isPalindrome(str) {
  if (typeof str !== "string") {
    return false;
  }

  for (let i = 0; i < str.length / 2; i++) {
    const leftCharacter = str[i];
    const rightCharacter = str[str.length - 1 - i];

    if (leftCharacter !== rightCharacter) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
