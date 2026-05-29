// HARD CHALLENGE 2: Prevent duplicate student names.

function isValidName(name) {
    return typeof name === "string" && name.trim() !== "";
}

function isValidScore(score) {
    return typeof score === "number" && !Number.isNaN(score) && score >= 0 && score <= 100;
}

function hasDuplicateName(students, name) {
    if (!Array.isArray(students) || !isValidName(name)) {
        return null;
    }

    let normalizedName = name.trim().toLowerCase();

    for (let i = 0; i < students.length; i++) {
        if (!isValidName(students[i].name)) {
            return null;
        }

        if (students[i].name.toLowerCase() === normalizedName) {
            return true;
        }
    }

    return false;
}

function addStudent(students, name, score) {
    if (!Array.isArray(students) || !isValidName(name) || !isValidScore(score)) {
        return "Invalid data";
    }

    if (hasDuplicateName(students, name)) {
        return "Duplicate name";
    }

    students.push({
        name: name.trim(),
        score
    });

    return "Student added";
}

let students = [
    { name: "John", score: 70 }
];

console.log(addStudent(students, "Mike", 95));
console.log(addStudent(students, "John", 88));
console.log(students);
