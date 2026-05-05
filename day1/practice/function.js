function Add(a, b ,c) {
    return a + b + c
}
console.log("a + b + c = " + Add(9, 8, 5))

function Sum(x, y) {
    sum = 0
    while (x <= y) {
        sum += x
        x += 1
    }

    return sum;
}
console.log("Sum of the number is: ", Sum(1, 100))

