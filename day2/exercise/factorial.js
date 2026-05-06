function Factorial(n) {
    let fact = 1
    for (let i = n; i > 0; i--) {
        fact *= i // do not using fact[i]
    }
    return fact;
}
// Fact[n] = n * (n - 1) * ..... * 1
console.log(Factorial(9))

