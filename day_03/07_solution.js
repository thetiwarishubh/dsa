// Movie Ticket Eligibility
// Age < 5 => Free
// Age <= 18 => ₹100
// Age <= 60 => ₹200
// Age > 60 => ₹150


const movieTicketPrice = function(age){
    if (!age || age < 0 || age > 99) return "Enter a correct age ? "
    if (age < 5){
        return "Free"
    } else if (age <= 18){
        return "Pay ₹100 for Movies."
    } else if (age <= 60) {
        return "Pay ₹200 for Movies."
    } else {
        return "Pay ₹150 for Movies"
    }
}

console.log(movieTicketPrice(51))