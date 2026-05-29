# Day 4 Notes

# SEC-202 — Objects & Nested Data Processing

# 1. What is an Object?
- An object is a data structure that stores information the form of key -> value pairs.
- Example:
```js
let student = {
    name: "John",
    age: 20,
    score: 85
};
```
# 2. Access Object Data
- To access object data we have 2 main ways:
```js
console.log(student.name);     // Dot notation → John
console.log(student["score"]); // Bracket notation → 85
```
Dot noration -> object.key (easy, common. but the key must be a valid indentify)
Bracket noration object["Key"]

# 3 Update Object Data
- To update object data we using className.objectName = newObjectData;

```js
student.score = 95;
```

# 4. Nested Objects
- Nested Objects is objects inside other objects. It's used to organize complex or hierarchical data and change values or add new properties directly.

```js
let user = {
    name: "Mike",
    address: {
        city: "Phnom Penh",
        zip: 12000
    }
};
```

- To access: Use dot notation (obj.inner.key) or bracket notation (obj["inner"]["key"]).

```js
console.log(user.address.city);
```

5. Arrays of Objects
- Arrays of Objects is a collection (array) where each element is an object. Store multiple records (like rows in a table). 

- To Access: Use index + property (students[0].name).

```js
let students = [
    { name: "John", score: 90 },
    { name: "Mike", score: 75 }
];
```


# ENGINEERING THINKING

- Before coding:
```js
    // INPUT?

    // OUTPUT?

    // EDGE CASES?

    // STEPS?

    // DATA STRUCTURE?
```

# DEFENSIVE PROGRAMMING

- Defensive programming means checking data before using it.
- Real software should not assume input is always correct.

```js
function isValidScore(score) {
    return typeof score === "number" && !Number.isNaN(score) && score >= 0 && score <= 100;
}
```

# DATA MODELING

- Data modeling means choosing a clear shape for the data.
- Example student model:

```js
let student = {
    name: "John",
    score: 90
};
```

- Good student data should have:
    - valid name
    - valid score
    - no duplicate name when names are used as identifiers

# COMMON DAY 4 SYSTEM METHODS

```js
addStudent(name, score);
searchStudent(name);
updateStudent(name, score);
deleteStudent(name);
sortStudentsByScore();
getGradeStats();
```

# IMPORTANT EDGE CASES

- Empty name.
- Score below 0.
- Score above 100.
- Score is not a number.
- Duplicate student name.
- Student not found.
- Empty student list.
