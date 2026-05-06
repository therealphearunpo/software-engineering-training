Day 2 test answer

Question:

let a = 1;

function test() {
  console.log(a);
  let a = 2;
}

Answer:
ReferenceError: Cannot access 'a' before initialization

Why:
Step 1: inside the function, JavaScript sees let a.
Step 2: this local a hides the global a.
Step 3: console.log(a) happens before let a = 2.
Step 4: because of that, it gives ReferenceError.

Simple idea:
The function does not use the global a.
It tries to use the local a, but the local one is not ready yet.
