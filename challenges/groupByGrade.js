// Step 1: Define a function to group students by their grades
// Step 2: Create an object to hold the grade groups (A, B, C, D, F)
// Step 3: Iterate through the list of students and determine their grade based on their score
// Step 4: Add each student to the appropriate grade group in the object
// Step 5: Return the object containing the grouped students

function groupByGrade(students) {
    let gradeGroups = {
        A: [],
        B: [],
        C: [],
        D: [],
        F: []
    };
    for (let student of students) {
        let grade;
        if (student.score >= 80) {
            grade = 'A';
        } else if (student.score >= 70) {
            grade = 'B';
        } else if (student.score >= 60) {
            grade = 'C';
        } else if (student.score >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        gradeGroups[grade].push(student);
    }
    return gradeGroups;
}

let students = [
    {name: "Tak", score: 90},
    {name: "Tota", score: 78},
    {name: "Phearun", score: 98},
    {name: "Nin", score: 61},
    {name: "John", score: 80},
    {name: "Nak", score: 79},
    {name: "Na", score: 97},
    {name: "Re", score: 67},
    {name: "H2O", score: 58}
];

console.log(groupByGrade(students));