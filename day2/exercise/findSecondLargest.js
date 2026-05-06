function findSecondLargest() {
    let arrs = [10, 5, 8, 20];
    let max = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arrs.length; i++) {
        if (arrs[i] > max) {
            secondLargest = max;
            max = arrs[i];
        } else if (arrs[i] > secondLargest && arrs[i] < max) {
            secondLargest = arrs[i];
        }
    }

    return secondLargest;
}

console.log("The Second Largest number is : " + findSecondLargest());
