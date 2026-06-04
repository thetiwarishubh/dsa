// 11. BMI Calculator
// BMI = weight / (height * height)


const bmi = function(weight, height){
    if (!weight || !height || weight <= 5 ) return "Enter a valid input ? "
    const heightMeters = height/100
    const calculateBMI = weight  / (heightMeters * heightMeters)
    return calculateBMI.toFixed(2) 
}

console.log(bmi(65, 180))