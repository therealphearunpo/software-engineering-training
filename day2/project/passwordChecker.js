// Password strength checker
// Step 1: check uppercase, lowercase, number, special char
// Step 2: also check length >= 8
// Step 3: count how many rules pass
// Step 4: return Weak, Medium, or Strong

function checkPasswordStrength(password) {
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
