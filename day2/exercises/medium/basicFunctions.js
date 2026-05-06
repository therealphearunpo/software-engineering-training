// Practice function
// Step 1: make greet function
// Step 2: make total price function
// Step 3: call both functions

function greet(name) {
  return "Hello " + name;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(greet("Tak"));
console.log("Total price: " + calculateTotal(5, 6));
