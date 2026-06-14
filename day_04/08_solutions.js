// Q8. All Factors of a Number


const allFactors = function(num){
    if(!num) return "Enter a Number ?"
    let factors = []
    for(let i = 1; i <= num; i++){
        if(num % i == 0){
            factors.push(i)
        }
    }
    return factors
}

console.log(allFactors(12))