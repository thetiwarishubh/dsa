// ✅ Q3. Reverse Loop (Print N to 1)

const reverseNumberprint = function(num){
    if (!num) return "Enter a number ?"
    for (let i = num; i > 0; i--){
        console.log(i)
    }
}


reverseNumberprint(100)