// Find the largest number in array
let arr = [3, 7, 2, 9, 5];
let max = arr[0]
for (let i = 1; i <= arr.length; i++){
    if (arr[i] > max)
        max = arr[i]
}
console.log(arr)
console.log("The largest number in this arr is: ", max)
