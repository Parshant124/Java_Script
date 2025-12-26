// function one(){
//     username = "Parshant"
//     function two(){
//         device = "OMEN"
//         console.log(username + " " + device)
//     }
//     // console.log(device)          // error
//     two()
// }
// // console.log(username)         // error
// one()


// function addOne(num1){
//     return num1 + 1
// }
// const addTwo = function(num2){
//     return num2 + 2
// }

// console.log(addOne(4))          // 5
// console.log(addTwo(4))          // 6
// // Here both are working fine but if we call the function before defining them, then the second function will through the error

// console.log(addOne(4))          // 5
// console.log(addTwo(4))          // error

function addOne(num1){
    return num1 + 1
}
const addTwo = function(num2){
    return num2 + 2
}