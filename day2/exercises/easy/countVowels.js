// Count vowels in a text
// Step 1: save vowels
// Step 2: loop in the text one by one
// Step 3: change character to lowercase
// Step 4: if it is vowel, add count

function countVowels(input) {
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
