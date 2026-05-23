// Step1: Create total variable
// Step2: Loop through the array
// Step3: add value

const arr = [1, 2, 3, 4];
function sumArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sumArray(arr));
