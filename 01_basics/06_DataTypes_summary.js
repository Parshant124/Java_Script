// Two types of datatypes in js :- Primitive and Non-Primitive

// Primitive
// String , Number , Boolean , null , undefined , Symbol , BigInt

let str1 = "Hiii"

const id = Symbol("123")
const otherId = Symbol("123")
const anotherId = Symbol("12345")

// Symbol
// console.log(id)             // Symbol(123)
// console.log(otherId)        // Symbol(123)
// console.log(id == otherId)  // Yet having the same value they are not equal.
// console.log(anotherId)      // Symbol(12345)

//BigInt
const number = 1234567893432456n  // write n at end to convert it into BigInt


// Non - Primitive (Reference)
// Array , Object , Function

//Array
const shape = ["Circle","Square","Oval"];
// console.log(shape);           // print the whole array
// console.log(shape[2]);        // print only specific index
// console.log(typeof shape);    // object

//Object
let intro = {
    name : "As",
    age : 20 , 
    height : 5.6
}
// console.log(intro)            // To print whole object
// console.log(intro.name)       // For specific variable in Object
// console.log(typeof intro)     // object

//Function
const myFunc = function(){         // Function declaration
    console.log("Inside the function")
}
// myFunc() ;  // calling of function
console.log(typeof myFunc)      // function or function object both are same

let sum = function(a,b){        // function sum(a,b){}
    console.log("It is a Sum Function")
    return a+b
}
let num = sum(4,5)
console.log(num)
console.log(typeof sum)