// Step 1: Define an array of objects to store student information
// Step 2: Loop through the array to find the student with the highest score
// Step 3: Handle the case where there are multiple students with the same highest score
// Step 4: Handle the case where the array is empty
// Step 5: Print the name(s) of the student(s) with the highest score
// Step 6: Return the name(s) of the student(s) with the highest score

function findStudent(name) { 
    let students = [ 
        {name: "Noah", score: 88},
        {name: "John", score: 98},
        {name: "Michel", score: 75},
        {name: "Jack", score: 89},
        {name: "Mike", score: 75},
    ];

    
    for (let i = 0; i < students.length; i++) {
        if (students[i].name === name) {
            console.log("Name found: " + students[i].name + ", Score: " + students[i].score);
            return;
        }
    }
    console.log("Name not found");
}

findStudent("Mike"); // Output: Name found: Mike, Score: 75