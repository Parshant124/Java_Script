// function AddNumb(num1, num2){
//     console.log(num1 + num2)
// }

// AddNumb(3,4)


// Return type function

// function MultNum(num1, num2){
//     return num1*num2
// }

// let res = MultNum(4, 5)
// console.log(res)


// Some functions

// function message(username){
//     return `Welcome ${username}`
// }

// console.log(message("Parshant"))             // Welcome Parshant

// In case of empty string, we will check if the string is empty or not first

// function message(username){
//     if(!username){
//         return `Please enter a username`
//     }
//     return `Welcome ${username}`
// }

// console.log(message(""))            // Please enter a username
// console.log(message())              // Please enter a username

// default arguement

function message(username = "default"){
    if(!username){
        return `Please enter a username`
    }
    return `Welcome ${username}`
}

console.log(message(""))            // Please enter a username
console.log(message())              // Welcome default
