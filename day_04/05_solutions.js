//  Q5. Sum Up to N Terms

const sum = function(num){
    if(!num) return "Enter a number ?"
    let total = 0
    for (let i = 1; i<= num; i++){
        total += i
    }
    return total
}

console.log(sum(10))