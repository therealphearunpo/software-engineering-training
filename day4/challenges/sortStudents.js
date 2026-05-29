// HARD CHALLENGE 1: Sort students by highest score.

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

function sortStudentsByScore(students) {
    if (!Array.isArray(students)) {
        return null;
    }

    for (let i = 0; i < students.length; i++) {
        if (!isValidStudent(students[i])) {
            return null;
        }
    }

    let sortedStudents = students.slice();

    sortedStudents.sort(function (firstStudent, secondStudent) {
        return secondStudent.score - firstStudent.score;
    });

    return sortedStudents;
}

let students = [
    { name: "Mike", score: 95 },
    { name: "John", score: 70 },
    { name: "Sophea", score: 88 },
    { name: "Dara", score: 95 }
];

console.log(sortStudentsByScore(students));
