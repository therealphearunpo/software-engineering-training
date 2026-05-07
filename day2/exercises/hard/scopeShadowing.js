// Problem: Practice scope shadowing and understand local vs global values
//
// Step 1: create a global variable
// Step 2: create a local variable with the same name inside a function
// Step 3: print both values to compare them
//
// Edge cases:
// - local variables only exist inside their block
// - a local variable with the same name hides the global variable

let a = 10;

function testA() {
  let a = 5;
  console.log("Inside testA:", a);
}

testA();
console.log("Outside testA:", a);

let b = 11;

function testB() {
  let b = 1;
  console.log("Inside testB:", b);
}

testB();
console.log("Outside testB:", b);

let x = 12;

function testX() {
  let x = 3;
  console.log("Inside testX:", x);
}

testX();
console.log("Outside testX:", x);
