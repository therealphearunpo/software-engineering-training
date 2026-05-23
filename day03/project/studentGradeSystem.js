/*
MINI PROJECT

- Student Structure
    {
        name: "John",
        Math: 85,
        Khmer: 90,
        ...
    }
- REQUIREMENTS
    Add students
    Find highest score
    Find average score
    Return grade:
    A = 90+
    B = 80+
    C = 70+
    D = below 70
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

function addStudent(name, ...scores) {
    if (scores.length !== SUBJECTS.length) {
        console.log(`Cannot add ${name}. Expected ${SUBJECTS.length} scores.`);
        return;
    }

    const student = { name };

    for (let i = 0; i < SUBJECTS.length; i++) {
        student[SUBJECTS[i]] = scores[i];
    }

    students.push(student);
    console.log(`Added student: ${name}`);
}

function totalScore(student) {
    let total = 0;

    for (const subject of SUBJECTS) {
        total += student[subject];
    }

    return total;
}

function averageScore(student) {
    return totalScore(student) / SUBJECTS.length;
}

function findHighestScore() {
    if (students.length === 0) {
        return null;
    }

    let highestStudent = students[0];
    let highestAverage = averageScore(highestStudent);

    for (let i = 1; i < students.length; i++) {
        const currentAverage = averageScore(students[i]);

        if (currentAverage > highestAverage) {
            highestAverage = currentAverage;
            highestStudent = students[i];
        }
    }

    return {
        student: highestStudent,
        total: totalScore(highestStudent),
        average: highestAverage
    };
}

function getHighScore() {
    const result = findHighestScore();

    if (result) {
        console.log(
            `Highest Score: ${result.student.name} with average ${result.average.toFixed(2)} and total ${result.total}`
        );
    } else {
        console.log("No students added yet.");
    }
}

function findAverageScore() {
    if (students.length === 0) {
        return 0;
    }

    let totalAverage = 0;

    for (const student of students) {
        totalAverage += averageScore(student);
    }

    return totalAverage / students.length;
}

function getAverageScore() {
    const avg = findAverageScore();
    console.log(`Class Average Score: ${avg.toFixed(2)}`);
}

function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    return "D";
}

function showAllStudent() {
    console.log("\n--- Student List ---");

    for (const student of students) {
        const total = totalScore(student);
        const avg = averageScore(student);
        console.log(`${student.name} - Total: ${total}, Average: ${avg.toFixed(2)}, Grade: ${getGrade(avg)}`);
    }
}

function main() {
    console.log("Student Grade System");
    addStudent("Tak", 100, 100, 100, 99, 50, 100, 100);
    addStudent("Sophea", 80, 85, 70, 75, 90, 88, 92);

    showAllStudent();
    getHighScore();
    getAverageScore();
}

main();
