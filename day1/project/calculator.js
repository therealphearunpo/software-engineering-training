function calculator(a, b, operator){
    if (operator == "+") return a + b;
    else if (operator == "-") return a - b;
    else if (operator == "*") return a * b;
    else if (operator == "/") {
        if ( b == 0) return "Error: Undefined!"
        return a / b;
    }
    else if (operator == "%") {
        if ( b == 0) return "Error: Undefined!"
        return a % b;
    }
    else {return "Invalid!"}
}
console.log(calculator(9, 9, "%"))
