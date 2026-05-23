// Step1: Assume that's the first value is smallest value
// Step2: Compare with all value in array
// Step3: Update minimum

const arr = [7, 2, 9, 1];
function findMin(arr) {
    if (arr.length === 0) {
        return null;
    }

    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(findMin(arr));
