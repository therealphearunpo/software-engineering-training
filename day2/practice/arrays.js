let nums = [1, 2, 3, 4];

for (let i = 0; i <= nums.length; i++) {
    console.log("Using nums.lengths to prints: " + i)
}

for (let n of nums) {
    console.log("using [of] key word to prints: " + n)
}
for (let m = nums.length; m >= 0; m--){
    console.log("using nums.length to prints reverse of the nums list: " + m)
}

