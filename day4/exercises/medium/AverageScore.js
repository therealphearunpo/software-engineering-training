// step 1: Define a class to manage student information
// step 2: Implement methods to add, delete, update, and search for students
// step 3: Implement a method to calculate the average score of all students
// step 4: Implement a method to find the student(s) with the highest score
// step 5: Implement a method to list all students who passed (score >= 50)
// step 6: Handle edge cases such as empty student list and duplicate names

function findAverageScore () {
    let students = [
        {name: "Tak", score1: 99, score2: 80, score3: 79, score4: 90, score5: 95, score6: 75, score7: 90},
        {name: "Taki", score1: 95, score2: 70, score3: 89, score4: 100, score5: 85, score6: 65, score7: 98},
        {name: "Tota", score1: 94, score2: 80, score3: 69, score4: 60, score5: 95, score6: 85, score7: 99},
    ];

    for (let i = 0; i < students.length; i++) {
        let sum = students[i].score1 + students[i].score2 + students[i].score3 +
                students[i].score4 + students[i].score5 + students[i].score6 +
                students[i].score7;

        let avg = sum / 7;

        console.log(`${students[i].name} - Total: ${sum}, Average: ${avg.toFixed(2)}`);
    }
}

findAverageScore();
