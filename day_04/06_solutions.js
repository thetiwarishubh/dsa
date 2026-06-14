// Q6. Factorial of a Number

const fact = function(num){
    let factorial = 1
    if(!num) return "Enter a number ?"
    for(let i = num; i > 0; i--){
        factorial *= i
    }
    return factorial
}

console.log(fact(5))