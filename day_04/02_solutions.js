// ✅ Q2. Print Natural Numbers up to N


const printNaturalNumbers = function(num){
    if (!num) return `Enter a number ?`
    for (let i = 1; i<=num; i++){
        console.log(i);
    }
}

printNaturalNumbers(1000000)