// Practice scope
// Step 1: make global variable
// Step 2: make local variable with same name inside function
// Step 3: print both and see the difference

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
