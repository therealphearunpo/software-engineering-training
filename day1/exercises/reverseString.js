// Reverse String
let text = "hello";
let newText = ""

for (let i = text.length - 1; i >= 0; i--){
    newText += text[i];
}
console.log("text after reversed: "+ newText)

let text2 = "Hello World!"
let reversed = ""
for (let i = text2.length -1; i >= 0; i--) {
    reversed += text2[i];
}
console.log("Hello World! -> " + reversed)