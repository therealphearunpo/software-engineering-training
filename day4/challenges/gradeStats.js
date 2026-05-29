// HARD CHALLENGE 3: Count how many students are in each grade.

function isValidStudent(student) {
    return student !== null &&
        typeof student === "object" &&
        typeof student.name === "string" &&
        student.name.trim() !== "" &&
        typeof student.score === "number" &&
        !Number.isNaN(student.score) &&
        student.score >= 0 &&
        student.score <= 100;
}

function getGrade(score) {
    if (score >= 90) {
        return "A";
    }

    if (score >= 80) {
        return "B";
    }

    if (score >= 70) {
        return "C";
    }

    if (score >= 50) {
        return "D";
    }

    return "F";
}

function getGradeStats(students) {
    if (!Array.isArray(students)) {
        return null;
    }

    let stats = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    };

    for (let i = 0; i < students.length; i++) {
        if (!isValidStudent(students[i])) {
            return null;
        }

        let grade = getGrade(students[i].score);
        stats[grade]++;
    }

    return stats;
}

let students = [
    { name: "Mike", score: 95 },
    { name: "John", score: 70 },
    { name: "Sophea", score: 88 },
    { name: "Dara", score: 95 },
    { name: "Nita", score: 45 }
];

console.log(getGradeStats(students));
