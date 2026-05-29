// step 1: Define a class to manage student information
// step 2: Implement methods to add, delete, update, and search for students
// step 3: Implement a method to calculate the average score of all students
// step 4: Implement a method to find the student(s) with the highest score
// step 5: Implement a method to list all students who passed (score >= 50)
// step 6: Handle edge cases such as empty student list and duplicate names

function filterPassedStudents () {
    let students = [
        {name: "Tak", score: 90},
        {name: "Tota", score: 98},
        {name: "Phearun", score: 98},
        {name: "Nin", score: 98},
        {name: "John", score: 90},
        {name: "Nak", score: 98},
        {name: "Na", score: 97},
        {name: "Re", score: 97},
        {name: "H2O", score: 98}
    ];
    
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= 50) {
            console.log(`{name: "${students[i].name}", score: ${students[i].score}}`);
        }
    }

}

filterPassedStudents();

/* Expected output:
[
    {name:"John", score:90}
]
*/
