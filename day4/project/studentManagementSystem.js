// Student Management System
// Focus: centralized data, validation, defensive programming, and reusable methods.

class StudentManagementSystem {
    constructor(initialStudents = []) {
        this.students = [];

        for (let i = 0; i < initialStudents.length; i++) {
            this.addStudent(initialStudents[i].name, initialStudents[i].score, false);
        }
    }

    isValidName(name) {
        return typeof name === "string" && name.trim() !== "";
    }

    isValidScore(score) {
        return typeof score === "number" && !Number.isNaN(score) && score >= 0 && score <= 100;
    }

    normalizeName(name) {
        return name.trim();
    }

    findStudentIndex(name) {
        if (!this.isValidName(name)) {
            return -1;
        }

        let normalizedName = this.normalizeName(name).toLowerCase();

        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name.toLowerCase() === normalizedName) {
                return i;
            }
        }

        return -1;
    }

    hasDuplicateName(name) {
        return this.findStudentIndex(name) !== -1;
    }

    validateStudent(name, score) {
        if (!this.isValidName(name)) {
            return "Invalid name";
        }

        if (!this.isValidScore(score)) {
            return "Invalid score";
        }

        return null;
    }

    addStudent(name, score, shouldLog = true) {
        let error = this.validateStudent(name, score);

        if (error !== null) {
            if (shouldLog) {
                console.log(error);
            }
            return false;
        }

        if (this.hasDuplicateName(name)) {
            if (shouldLog) {
                console.log("Duplicate name found: " + this.normalizeName(name));
            }
            return false;
        }

        let student = {
            name: this.normalizeName(name),
            score
        };

        this.students.push(student);

        if (shouldLog) {
            console.log("Student added: " + student.name + ", Score: " + student.score);
        }

        return true;
    }

    deleteStudent(name) {
        if (!this.isValidName(name)) {
            console.log("Invalid name");
            return false;
        }

        let index = this.findStudentIndex(name);

        if (index === -1) {
            console.log("Student not found: " + this.normalizeName(name));
            return false;
        }

        let deletedStudent = this.students.splice(index, 1)[0];
        console.log("Student deleted: " + deletedStudent.name);
        return true;
    }

    updateStudent(name, score) {
        if (!this.isValidName(name)) {
            console.log("Invalid name");
            return false;
        }

        if (!this.isValidScore(score)) {
            console.log("Invalid score");
            return false;
        }

        let index = this.findStudentIndex(name);

        if (index === -1) {
            console.log("Student not found: " + this.normalizeName(name));
            return false;
        }

        this.students[index].score = score;
        console.log("Student updated: " + this.students[index].name + ", Score: " + score);
        return true;
    }

    searchStudent(name) {
        if (!this.isValidName(name)) {
            console.log("Invalid name");
            return null;
        }

        let index = this.findStudentIndex(name);

        if (index === -1) {
            console.log("Student not found: " + this.normalizeName(name));
            return null;
        }

        console.log("Student found: " + this.students[index].name + ", Score: " + this.students[index].score);
        return this.students[index];
    }

    getAverageScore() {
        if (this.students.length === 0) {
            return null;
        }

        let totalScore = 0;

        for (let i = 0; i < this.students.length; i++) {
            totalScore += this.students[i].score;
        }

        return totalScore / this.students.length;
    }

    showAverageScore() {
        let averageScore = this.getAverageScore();

        if (averageScore === null) {
            console.log("No students available");
            return null;
        }

        console.log("Average Score: " + averageScore.toFixed(2));
        return averageScore;
    }

    getTopStudents() {
        if (this.students.length === 0) {
            return {
                score: null,
                students: []
            };
        }

        let topScore = this.students[0].score;
        let topStudents = [this.students[0]];

        for (let i = 1; i < this.students.length; i++) {
            if (this.students[i].score > topScore) {
                topScore = this.students[i].score;
                topStudents = [this.students[i]];
            } else if (this.students[i].score === topScore) {
                topStudents.push(this.students[i]);
            }
        }

        return {
            score: topScore,
            students: topStudents
        };
    }

    showTopStudents() {
        let result = this.getTopStudents();

        if (result.students.length === 0) {
            console.log("No students available");
            return result;
        }

        let names = [];

        for (let i = 0; i < result.students.length; i++) {
            names.push(result.students[i].name);
        }

        console.log("Top Score: " + result.score);
        console.log("Top Student(s): " + names.join(", "));
        return result;
    }

    getPassedStudents() {
        let passedStudents = [];

        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].score >= 50) {
                passedStudents.push(this.students[i]);
            }
        }

        return passedStudents;
    }

    showPassedStudents() {
        let passedStudents = this.getPassedStudents();

        if (passedStudents.length === 0) {
            console.log("No passed students");
            return passedStudents;
        }

        for (let i = 0; i < passedStudents.length; i++) {
            console.log(`{name: "${passedStudents[i].name}", score: ${passedStudents[i].score}}`);
        }

        return passedStudents;
    }

    sortStudentsByScore() {
        let sortedStudents = this.students.slice();

        sortedStudents.sort(function (firstStudent, secondStudent) {
            return secondStudent.score - firstStudent.score;
        });

        return sortedStudents;
    }

    getGrade(score) {
        if (score >= 90) {
            return "A";
        }

        if (score >= 80) {
            return "B";
        }

        if (score >= 70) {
            return "C";
        }

        if (score >= 50) {
            return "D";
        }

        return "F";
    }

    getGradeStats() {
        let stats = {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            F: 0
        };

        for (let i = 0; i < this.students.length; i++) {
            let grade = this.getGrade(this.students[i].score);
            stats[grade]++;
        }

        return stats;
    }

    showAllStudents() {
        if (this.students.length === 0) {
            console.log("No students available");
            return;
        }

        for (let i = 0; i < this.students.length; i++) {
            console.log(`${this.students[i].name} - Score: ${this.students[i].score}, Grade: ${this.getGrade(this.students[i].score)}`);
        }
    }
}

let initialStudents = [
    { name: "Tak", score: 90 },
    { name: "Tota", score: 98 },
    { name: "Phearun", score: 98 },
    { name: "Nin", score: 98 },
    { name: "Nak", score: 98 },
    { name: "Na", score: 97 },
    { name: "Re", score: 97 },
    { name: "H2O", score: 98 }
];

let system = new StudentManagementSystem(initialStudents);

console.log("--- Student Management System ---");
system.showAllStudents();

console.log("\n--- Add Student ---");
system.addStudent("John", 95);
system.addStudent("John", 88);
system.addStudent("", 90);
system.addStudent("Invalid Score", -10);

console.log("\n--- Search and Update ---");
system.searchStudent("John");
system.updateStudent("John", 99);
system.searchStudent("John");
system.deleteStudent("Unknown");

console.log("\n--- Reports ---");
system.showAverageScore();
system.showTopStudents();
console.log("Grade Stats:", system.getGradeStats());
console.log("Sorted Students:", system.sortStudentsByScore());
system.showPassedStudents();
