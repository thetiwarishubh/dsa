// 1. sum of two integer

const addTwoInteger = function(a, b){
    return a + b
}


console.log(addTwoInteger(2, 4))


//  2. Great the user

const greeting = function(username){
    if(!username) return 'Please Enter a username ?'
    return `Welcome ${username}`
}

console.log(greeting("Shubham"))

//3. Swap two variables without Third Variables
const swapVariables = function(a, b){
    return [a, b] = [b, a]
}

console.log(swapVariables(4, 5))

// 4. Find Even or Odd

const evenOdd = function(num){
    if (!num) return "Enter a num ? "
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}


console.log(evenOdd(67))

// 5. Find Largest of Two Numbers

const findLargestNumber = function(a, b){
    if (a > b){
        return "a is largest"
    } else {
        return "b is largest"
    }
}

console.log(findLargestNumber(3, 6))




// 6. Find Smallest of Two Numbers

const findSmallestNumber = function(a, b){
    if (a < b){
        return "a is smallest"
    } else {
        return "b is smallest"
    }
}

console.log(findSmallestNumber(13, 6))


// 7. Check Positive, Negative or Zero


const checkNumber = function(num){
    if (!num) return "Please Enter a number ? "
    if (num > 0){
        return "Positive"
    } else if (num < 0){
        return "Negative"
    } else {
        return "Zero"
    }
}

console.log(checkNumber(-87))


// 8. Find Square of a Number

const square = (num) => num ** 2;
console.log(square(5))


// 9. Find Cube of a Number


const cube = (num) => num ** 3;
console.log(cube(5))


// 10. Check Divisibility by 5

const checkDivisibility = function(num) {
    if (!num) return " Enter a number ? "
    if (num % 5 == 0){
        return "This is complete divisible by 5"
    } else {
        return "This is not complete divisible by 5"
    }
}

console.log(checkDivisibility(575))


// 11. Check Divisibility by 3 and 5

const checkDivisibilityFiveandThree = function(num) {
    if (!num) return " Enter a number ? "
    if (num % 5 == 0 && num % 3 == 0){
        return "This is complete divisible by 5 and 3"
    } else {
        return "This is not complete divisible by 5 and 3"
    }
}

console.log(checkDivisibilityFiveandThree(510))



// 12. Print Numbers 1 to 10 using Loop

for (let i = 1; i <= 10; i++){
    console.log(`Using for loop ${i}`)
}

let i = 1;
while (i <= 10){
    console.log(`Using while loop ${i}`)
    i++
}


// 13. Print Numbers 10 to 1 using Loop

for (let i = 10; i > 0; i--){
    console.log(`Running Negative Using For Loop ${i}`)
}

let j = 10;
while (j > 0){
    console.log(`Running Negative Using While Loop ${j}`)
    j--
}

// 14. Find Sum of First N Natural Numbers

const sumOfNaturalNumber = function(num) {
    let count = 0;
    for (let i = 1; i <= num; i++){
        count += i
    }

    return count;
}

console.log(sumOfNaturalNumber(11))


// 15. Find the Largest of Three Numbers

const findThreeLargestNumber = function(a, b, c){
    if (!a || !b || !c) return "Please Enter Number ? "

    if (a > b && a > c){
        return "a is largest"
    } else if (b > a && b > c){
        return "b is largest"
    } else {
        return "c is largest"
    }
}

console.log(findThreeLargestNumber(11, 32, 5))



// 16. Count Digits in a Number

const countDigits = function(nums){
    if (!nums) return "Please Enter Numbers ?"
}