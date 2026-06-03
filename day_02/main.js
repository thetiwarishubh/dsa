const maxNum = Math.max(12, 4,5 , 7, 86, 97)
console.log(maxNum)

const minNum = Math.min(12, 4,5 , 7, 86, 97, 685) 
console.log(minNum)

// 1. Generate 4 digits OTP
const max = 9999
const min = 1000
const otp = Math.floor(Math.random() * (max - min + 1) + min)
console.log(otp)


// 2. Accept two number and print the greatest between them.


function calculateCircleProperties(r) {
    const area = Math.PI*(r) ** 2
    const circum = 2* Math.PI * r
    return [area, circum]
}

console.log(calculateCircleProperties(5.2))