// const score = 132
// console.log(score)
// console.log(typeof score)                      // number

// const otherScore = new Number(144)             // Dynamic memory allocation
// console.log(otherScore)
// console.log(typeof otherScore)                 // Object

// console.log(typeof otherScore.toString())      // Convert number to string , now it is applicable to perform string operation on it

// let num = 123.4567
// console.log(num.toFixed(2))                     // 123.46
// console.log(num.toPrecision(4))                 // 123.5

// let amount = 1234566789
// console.log(amount.toLocaleString())           // 1,23,45,66,789 // Add commas according to Indian Standards
// console.log(amount.toLocaleString('en-US'))    // 1,234,566,789 // commas according to US standards      

// console.log(Number.MAX_VALUE)                  // INT_MAX
// console.log(Number.MIN_VALUE)                  // INT_MIN



//  MATH 

// console.log(Math)                                  // Object
// console.log(Math.abs(-45))                         // 45
// console.log(Math.round(4.2))                       // 4
// console.log(Math.round(4.8))                       // 5
// console.log(Math.ceil(4.2))                        // 5
// console.log(Math.floor(4.8))                       // 4

console.log(Math.random())                         // Gives a random value between 0 and 1

// Here i want my output to be between 1 and 6
const max = 6
const min = 1
console.log(Math.floor(Math.random() * (max - min + 1)) + min)