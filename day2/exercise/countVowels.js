function countVowels(input) {
    let count = 0
    for (let i = 0; i <= input.length; i++){
        if (input[i] == "a") {
            count += 1
        }else if (input[i] == "e") {
            count += 1
        }else if (input[i] == "i") {
            count += 1
        }else if (input[i] == "o") {
            count += 1
        }else if (input[i] == "u") {
            count += 1
        }
    }
    return count
}

console.log("the vowels in this text : " + countVowels("Hello My Name is Tak, I'm 19 year old."))

