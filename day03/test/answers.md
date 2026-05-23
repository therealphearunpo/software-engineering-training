# ENGINEERING TEST
-Q1: 
    let arr = [1,2,3];
    arr[5] = 10;
    console.log(arr.length);
    
    -> Output: 6
-Q2:
    arr.push()
    arr.pop()
    
    -> push: adds new value to the last element of array.
    -> pop: removes the last value from the array.

-Q3:
    function findMissingNumber(arr)

    Example:
    [1,2,3,5] -> 4

    Answer:
    function findMissingNumber(arr) {
        for (let i = 0; i < arr.length; i++) {
            let expectedNumber = i + 1;

            if (arr[i] !== expectedNumber) {
                return expectedNumber;
            }
        }

        return arr.length + 1;
    }

    Why:
    - The array should increase by 1 each step.
    - At index 0, we expect number 1.
    - At index 1, we expect number 2.
    - At index 2, we expect number 3.
    - At index 3, we expect number 4, but the array has 5.
    - That means 4 is the missing number.
