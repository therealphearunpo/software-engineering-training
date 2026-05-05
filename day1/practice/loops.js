// Loops

//For_Loop
console.log("For Loop")
for (let i = 0; i <= 5; i++){
    console.log(i)
}
for (let j = 10; j >= 5; j--){
    console.log(j)
}
console.log("2D Loop")
for (let i = 10; i >= 0; i--){
    for (let j = 0; j <= 10; j++){
        console.log(j)
    }
}

// While Loop
console.log("While_Loop")
let z = 1

while (z <= 5) {
    console.log(z)
    z++;
}
console.log("While_Loop2")
let e = 1
while (e <= 20) {
    console.log(e)
    e += 2
}
console.log("While_Loop3_Sum of number")
let sum = 0
let i = 1
while (i <= 200){
    sum += i
    i += 1
}
console.log("Sum = " + sum)
