// Problem: Practice simple reusable functions
//
// Step 1: build a greeting function
// Step 2: build a total price function
// Step 3: return safe values when input is not valid
//
// Edge cases:
// - name is not a string
// - price or quantity is not a number

function greet(name) {
  if (typeof name !== "string" || name.trim() === "") {
    return "Hello guest";
  }

  return "Hello " + name;
}

function calculateTotal(price, quantity) {
  if (typeof price !== "number" || typeof quantity !== "number") {
    return 0;
  }

  return price * quantity;
}

console.log(greet("Tak"));
console.log("Total price: " + calculateTotal(5, 6));
