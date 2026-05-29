// Step 1: Define a class to manage student information
// Step 2: Implement methods to add, delete, update, and search for students
// Step 3: Implement a method to calculate the average score of all students
// Step 4: Implement a method to find the student(s) with the highest score
// Step 5: Implement a method to list all students who passed (score >= 50)
// Step 6: Handle edge cases such as empty student list and duplicate names

class StudentManagementSystem {
    constructor() {
        this.students = [
            { name: "Tak", score: 90 },
            { name: "Tota", score: 98 },
            { name: "Phearun", score: 98 },
            { name: "Nin", score: 98 },
            { name: "Nak", score: 98 },
            { name: "Na", score: 97 },
            { name: "Re", score: 97 },
            { name: "H2O", score: 98 }
        ];
    }

    addStudent(name, score) {
        this.students.push({ name, score });
        console.log("Student added: " + name + ", Score: " + score);
        return this.students;
    }

    deleteStudent(name) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name === name) {
                let deletedStudent = this.students.splice(i, 1)[0];
                console.log("Student deleted: " + deletedStudent.name + ", Score: " + deletedStudent.score);
                return this.students;
            }
        }

        console.log("Name not found");
        return this.students;
    }

    updateStudent(name, score) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name === name) {
                this.students[i].score = score;
                console.log("Name found: " + this.students[i].name + ", Score updated to: " + this.students[i].score);
                return this.students[i];
            }
        }

        console.log("Name not found");
        return null;
    }

    searchStudent(name) {
        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].name === name) {
                console.log("Name found: " + this.students[i].name + ", Score: " + this.students[i].score);
                return this.students[i];
            }
        }

        console.log("Name not found");
        return null;
    }

    showAverageScore() {
        if (this.students.length === 0) {
            console.log("No students available");
            return 0;
        }

        let totalScore = 0;
        for (let i = 0; i < this.students.length; i++) {
            totalScore += this.students[i].score;
        }

        let averageScore = totalScore / this.students.length;
        console.log("Average Score: " + averageScore.toFixed(2));
        return averageScore;
    }

    showTopStudent() {
        if (this.students.length === 0) {
            console.log("No students available");
            return [];
        }

        let topScore = this.students[0].score;
        let topStudents = [this.students[0].name];

        for (let i = 1; i < this.students.length; i++) {
            if (this.students[i].score > topScore) {
                topScore = this.students[i].score;
                topStudents = [this.students[i].name];
            } else if (this.students[i].score === topScore) {
                topStudents.push(this.students[i].name);
            }
        }

        console.log("Top Score: " + topScore);
        console.log("Top Student(s): " + topStudents.join(", "));
        return topStudents;
    }

    showPassedStudents() {
        let passedStudents = [];

        for (let i = 0; i < this.students.length; i++) {
            if (this.students[i].score >= 50) {
                passedStudents.push(this.students[i]);
                console.log(`{name: "${this.students[i].name}", score: ${this.students[i].score}}`);
            }
        }

        return passedStudents;
    }
}

let system = new StudentManagementSystem();
console.log("Initial students:", system.students);
system.addStudent("John", 95);
system.deleteStudent();
system.searchStudent();
system.updateStudent();
system.searchStudent();
system.showAverageScore();
system.showTopStudent();
system.showPassedStudents();
console.log("Initial students:", system.students);
