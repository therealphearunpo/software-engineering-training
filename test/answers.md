# ENGINEERING TEST

# Q1: Output: undefined
# Q2: The difference between object and array
    - Object → A collection of key–value pairs, accessed by property names (keys).
        Example: {name: "John", age: 20}
    -  Array → An ordered list of values, accessed by numeric indices starting at 0.
        Example: ["apple", "banana", "cherry"]
# Q3: 
```js
function groupByGrade(students) {
    let result = {
        A: [],
        B: [],
        C: [],
        D: []
    };

    for (let student of students) {
        let grade;
        if (student.score >= 90) {
            grade = "A";
        } else if (student.score >= 80) {
            grade = "B";
        } else if (student.score >= 70) {
            grade = "C";
        } else {
            grade = "D";
        }
        result[grade].push(student.name);
    }

    return result;
}

// Example usage:
let students = [
    { name: "Tak", score: 95 },
    { name: "Tota", score: 82 },
    { name: "Phearun", score: 76 },
    { name: "Nin", score: 65 },
    { name: "Nak", score: 89 }
];

console.log(groupByGrade(students));
```