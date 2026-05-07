// Problem: Count how many vowels exist in a text
//
// Step 1: make a list of vowels
// Step 2: loop through the text one character at a time
// Step 3: convert each character to lowercase
// Step 4: if the character is a vowel, increase the count
//
// Edge cases:
// - input is not a string
// - input is an empty string

function countVowels(input) {
  if (typeof input !== "string") {
    return 0;
  }

  const vowels = "aeiou";
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    const currentCharacter = input[i].toLowerCase();

    if (vowels.includes(currentCharacter)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("Hello My Name is Tak, I'm 19 year old."));
