// Step 1: access properties
// Step 2: combine into sentence

let student = { // Define an array of objects to store student information
    name: "John",
    age: 20,
    score: 85
}

console.log(student.name + " is " + student.age + " years old and scored " + student.score); // Output: John is 20 years old and scored 85

let book = { // Define an array of objects to store book information
    name: ["CalculusI", "CalculusII", "CalculusIII"],
    publishYear: [2022, 2023, 2023],
    price: [50, 55, 65]
}
console.log(book.name[0] + " Publish year: " + book.publishYear[0] + " Price: $" + book.price[0]); // Output: CalculusI Publish year: 2022 Price: $50
console.log(book.name[1] + " Publish year: " + book.publishYear[1] + " Price: $" + book.price[1]);
console.log(book.name[2] + " Publish year: " + book.publishYear[2] + " Price: $" + book.price[2]);
console.log("\nor\n")
for (let i = 0; i < book.name.length; i++) {
    console.log(book.name[i] + " Publish year: " + book.publishYear[i] + " Price: $" + book.price[i]); // Output: CalculusI Publish year: 2022 Price: $50, CalculusII Publish year: 2023 Price: $55, CalculusIII Publish year: 2023 Price: $65
}