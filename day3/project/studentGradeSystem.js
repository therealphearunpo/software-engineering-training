/*
MINI PROJECT: Student Grade System

INPUT?
- student name
- one score for each subject

OUTPUT?
- add a student
- show each student's total, average, and grade
- find the highest student average
- find the class average

EDGE CASES?
- invalid name
- wrong number of scores
- score is not a number
- negative score
- score greater than 100
- duplicate student names
- empty student list

TIME COMPLEXITY?
- addStudent: O(s) where s = number of subjects
- findHighest: O(n * s)
- findClassAverage: O(n * s)
*/

const SUBJECTS = [
    "Math",
    "Khmer",
    "Physics",
    "Chemistry",
    "Biology",
    "GeneralHistory",
    "English"
];

const students = [];

function isValidName(name) {
    return typeof name === "string" && name.trim() !== "";
}

function isValidScore(score) {
    return typeof score === "number" && !Number.isNaN(score) && score >= 0 && score <= 100;
}

function hasDuplicateStudent(name) {
    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === name.toLowerCase()) {
            return true;
        }
    }

    return false;
}

function createStudent(name, scores) {
    if (!isValidName(name)) {
        return null;
    }

    if (!Array.isArray(scores) || scores.length !== SUBJECTS.length) {
        return null;
    }

    const student = {
        name: name.trim()
    };

    for (let i = 0; i < SUBJECTS.length; i++) {
        if (!isValidScore(scores[i])) {
            return null;
        }

        student[SUBJECTS[i]] = scores[i];
    }

    return student;
}

function addStudent(name, ...scores) {
    if (!isValidName(name)) {
        console.log("Cannot add student. Name is invalid.");
        return false;
    }

    if (hasDuplicateStudent(name.trim())) {
        console.log(`Cannot add ${name}. Student name already exists.`);
        return false;
    }

    const student = createStudent(name, scores);

    if (student === null) {
        console.log(`Cannot add ${name}. Check the number of scores and score values.`);
        return false;
    }

    students.push(student);
    console.log(`Added student: ${student.name}`);
    return true;
}

function totalScore(student) {
    let total = 0;

    for (let i = 0; i < SUBJECTS.length; i++) {
        total += student[SUBJECTS[i]];
    }

    return total;
}

function findAverage(student) {
    return totalScore(student) / SUBJECTS.length;
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

    return "D";
}

function findHighest() {
    if (students.length === 0) {
        return null;
    }

    let highestStudent = students[0];
    let highestAverage = findAverage(students[0]);

    for (let i = 1; i < students.length; i++) {
        const currentAverage = findAverage(students[i]);

        if (currentAverage > highestAverage) {
            highestAverage = currentAverage;
            highestStudent = students[i];
        }
    }

    return {
        student: highestStudent,
        total: totalScore(highestStudent),
        average: highestAverage,
        grade: getGrade(highestAverage)
    };
}

function findClassAverage() {
    if (students.length === 0) {
        return null;
    }

    let classTotal = 0;

    for (let i = 0; i < students.length; i++) {
        classTotal += findAverage(students[i]);
    }

    return classTotal / students.length;
}

function printStudent(student) {
    const total = totalScore(student);
    const average = findAverage(student);
    const grade = getGrade(average);

    console.log(`${student.name} - Total: ${total}, Average: ${average.toFixed(2)}, Grade: ${grade}`);
}

function showAllStudents() {
    if (students.length === 0) {
        console.log("No students added yet.");
        return;
    }

    console.log("\n--- Student List ---");

    for (let i = 0; i < students.length; i++) {
        printStudent(students[i]);
    }
}

function showHighestStudent() {
    const result = findHighest();

    if (result === null) {
        console.log("No students added yet.");
        return;
    }

    console.log(
        `Highest Score: ${result.student.name} with average ${result.average.toFixed(2)}, total ${result.total}, grade ${result.grade}`
    );
}

function showClassAverage() {
    const average = findClassAverage();

    if (average === null) {
        console.log("No students added yet.");
        return;
    }

    console.log(`Class Average Score: ${average.toFixed(2)}`);
}

function main() {
    console.log("Student Grade System");

    addStudent("Tak", 100, 100, 100, 99, 50, 100, 100);
    addStudent("Sophea", 80, 85, 70, 75, 90, 88, 92);
    addStudent("Dara", 95, 90, 85, 90, 92, 89, 94);

    showAllStudents();
    showHighestStudent();
    showClassAverage();
}

main();
