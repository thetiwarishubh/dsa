// Q9. Check Prime

const prime = function(num){
    if(!num) return "Enter a number ?"
    
    if (num <= 1) return false
    for (let i = 2; i < num; i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}


console.log(prime(19))


