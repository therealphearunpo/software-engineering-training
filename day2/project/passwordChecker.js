// Problem: Check password strength with a scoring system
//
// Step 1: validate the input first
// Step 2: check the 5 rules: length, uppercase, lowercase, number, special character
// Step 3: add 1 point for each rule that passes
// Step 4: return Weak, Medium, or Strong based on the score
//
// Edge cases:
// - input is not a string
// - empty password
// - password has only one type of character
// - password is long enough but still missing important character types

function checkPasswordStrength(password) {
  if (typeof password !== "string" || password.length === 0) {
    return "Weak";
  }

  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSpecialCharacter = false;

  for (let i = 0; i < password.length; i++) {
    const character = password[i];

    if (character >= "A" && character <= "Z") {
      hasUppercase = true;
    } else if (character >= "a" && character <= "z") {
      hasLowercase = true;
    } else if (character >= "0" && character <= "9") {
      hasNumber = true;
    } else {
      hasSpecialCharacter = true;
    }
  }

  const hasMinimumLength = password.length >= 8;

  let score = 0;
  if (hasMinimumLength) score++;
  if (hasUppercase) score++;
  if (hasLowercase) score++;
  if (hasNumber) score++;
  if (hasSpecialCharacter) score++;

  if (score === 5) {
    return "Strong";
  }

  if (score >= 3) {
    return "Medium";
  }

  return "Weak";
}

console.log(checkPasswordStrength("a10001"));
console.log(checkPasswordStrength("Abc12345"));
console.log(checkPasswordStrength("Abc123!X"));
console.log(checkPasswordStrength("the123321kbn!A"));
