/* 9. Login System Advanced
username = admin
password = 1234 */

const loginSystem = function(username, password){
    if(!username || !password) return "Enter correct input ? "
    if (username === "admin" && password === 1234){
        return "Login Successfull"
    } else {
        return "Invalid credentials!"
    }
}

console.log(loginSystem("admin", 1234))