// Step1 Create empty object
// Step2 Loop through the array
// Step3 Loop to find frequency
// Step4 if not exist result = 1


const arr = [1, 1, 2, 3, 3, 3];

function frequencyCounter(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];

        if (result[num]) {
            result[num]++;
        } else {
            result[num] = 1;
        }
    }
    return result;
}
console.log(frequencyCounter(arr));
