// 1. Sum of Even and Odd Numbers in Range


const evenOddSum = function(num){
    if (!num) return "Enter a number ? "
    let even = 0
    let odd = 0
    for (let i = 1; i<=num; i++){
        if(i % 2 == 0){
            even += i
        } else {
            odd += i
        }
    }
    return [even, odd]
}


console.log(evenOddSum(10))
