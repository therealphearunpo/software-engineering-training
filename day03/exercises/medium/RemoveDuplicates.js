// Step1: create array with duplicates
// Step2: create function to remove duplicates
// Step3: call function and print result
// Step4: add if not found

const arr = [1, 2, 2, 3, 3];

function removeDuplicates(arr) {
    let result = []; // let result = empty array

    for (let i = 0; i < arr.length; i++) {
        let exist = false; // if exist = false -> not exist

        for (let j = 0; j < result.length; j++) { // loop to find the duplicate value
            if (arr[i] === result[j]) { // if array[index1] === result[index1] -> exist = true
                exist = true;
                break; // finish loop
            }
        }

        if (!exist) { // If the variable exist is false, then add the current element arr[i] into the result array.
            result.push(arr[i]);
        }
    }
    return result; // return the result to function
}


console.log(removeDuplicates(arr)); // print the function
