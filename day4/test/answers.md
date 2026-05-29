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

# Q4: Sort students by highest score

```js
function sortStudentsByScore(students) {
    let sortedStudents = students.slice();

    sortedStudents.sort(function (firstStudent, secondStudent) {
        return secondStudent.score - firstStudent.score;
    });

    return sortedStudents;
}
```

# Q5: Prevent duplicate student names

```js
function hasDuplicateName(students, name) {
    let normalizedName = name.trim().toLowerCase();

    for (let i = 0; i < students.length; i++) {
        if (students[i].name.toLowerCase() === normalizedName) {
            return true;
        }
    }

    return false;
}
```

# Q6: Grade statistics

```js
function getGradeStats(students) {
    let stats = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        F: 0
    };

    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= 90) {
            stats.A++;
        } else if (students[i].score >= 80) {
            stats.B++;
        } else if (students[i].score >= 70) {
            stats.C++;
        } else if (students[i].score >= 50) {
            stats.D++;
        } else {
            stats.F++;
        }
    }

    return stats;
}
```

# Q7: Defensive checks needed in Day 4

- Check that name is not empty.
- Check that score is a number.
- Check that score is between 0 and 100.
- Check duplicate names before adding a student.
- Return a clear result when a student is not found.
