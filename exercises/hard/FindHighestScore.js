// Step 1: Define an array of objects to store student information
// Step 2: Loop through the array to find the student with the highest score
// Step 3: Handle the case where there are multiple students with the same highest score
// Step 4: Handle the case where the array is empty
// Step 5: Print the name(s) of the student(s) with the highest score
// Step 6: Return the name(s) of the student(s) with the highest score

function find_highest_score () {
    let students = [
    {name:"John", score:90},
    {name:"Mike", score:75},
    {name:"Anna", score:95}
    ]
    let highest = students[0];
    for (let i = 1; i < students.length; i++) {
        
        if (students[i].score > highest.score) {
            highest = students[i];
        }
    }
    console.log(highest.name)
    return highest.name;
}

function find_highest_score_2 () {
    console.log("\nDuplicate highest scores");
    let students = [
        {name: "Tak", score: 90},
        {name: "Tota", score: 98},
        {name: "Phearun", score: 98},
        {name: "Nin", score: 98},
        {name: "Nak", score: 98},
        {name: "Na", score: 97},
        {name: "Re", score: 97},
        {name: "H2O", score: 98}
    ];

    let highestScore = students[0].score;
    let highestStudents = [students[0].name];

    for (let i = 1; i < students.length; i++) {
        if (students[i].score > highestScore) {
            highestScore = students[i].score;
            highestStudents =  [students[i].name];
        }
        else if (students[i].score === highestScore) {
            highestStudents.push(students[i].name);
        }
    }
    console.log(`Highest Score: ${highestScore}`);
    console.log(`Students with highest score: \n ${highestStudents.join("\n ")}`);
    return { highestScore, highestStudents };
}

function find_highest_score_3 () {
    console.log("\nEmpty array");
    let students = [];

    if (students.length === 0) {
        console.log("Student not found!");
        return null
    }

    let highest = students[0];
    for (let i = 1; i < students.length; i++) {
        
        if (students[i].score > highest.score) {
            highest = students[i];
        }
    }
    console.log(highest.name)
    return highest.name;
}

find_highest_score();

find_highest_score_2();

find_highest_score_3 ();
