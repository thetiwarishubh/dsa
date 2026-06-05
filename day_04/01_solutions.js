// ✅ Q1. Print "Hello World" N Times



const multipleTimePrint = function(num) {
    if (!num) return "Enter a number ? "
    for (let i = 1; i <= num; i++){
        console.log(`Hello world ${i}`)
    }
}

multipleTimePrint(10)