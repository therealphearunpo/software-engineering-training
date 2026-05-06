function checkPassword(password) {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if (ch >= 'A' && ch <= 'Z') {
        hasUpper = true;
        }

        else if (ch >= 'a' && ch <= 'z') {
        hasLower = true;
        }

        else if (ch >= '0' && ch <= '9') {
        hasNumber = true;
        }
    }

    if (password.length >= 8 && hasUpper && hasLower && hasNumber) {
        return "Strong";
    } else {
        return "Weak";
    }
}

console.log(checkPassword("Abc123!"));
console.log(checkPassword("Abc123!X"));
