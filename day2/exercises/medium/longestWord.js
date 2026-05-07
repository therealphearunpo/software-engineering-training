// Problem: Find the longest word in a sentence
//
// Step 1: validate the input sentence
// Step 2: split the sentence into words
// Step 3: compare each word length with the current longest word
// Step 4: return the longest word
//
// Edge cases:
// - input is not a string
// - sentence is empty
// - sentence has extra spaces
// - two words have the same longest length

function longestWord(sentence) {
  if (typeof sentence !== "string") {
    return "";
  }

  const trimmedSentence = sentence.trim();

  if (trimmedSentence === "") {
    return "";
  }

  const words = trimmedSentence.split(/\s+/);
  let longest = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}

console.log(longestWord("hello world javascript"));
