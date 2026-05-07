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
Step 1: inside the function, JavaScript sees `let a`.
Step 2: that local `a` shadows the global `a = 1`.
Step 3: `console.log(a)` runs before the local `a` is initialized.
Step 4: because `let` is in the Temporal Dead Zone before initialization, JavaScript throws a `ReferenceError`.

Simple idea:
The function does not use the global `a`.
It tries to use the local `a`, but that local variable is still in the Temporal Dead Zone.
