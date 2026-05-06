// Check palindrome
// Step 1: start from front and back
// Step 2: compare both side characters
// Step 3: if not same, return false
// Step 4: if all same, return true

function isPalindrome(str) {
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
