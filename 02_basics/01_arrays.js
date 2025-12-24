// Unlike C / C++ we can store multiple datatypes in one array

// Arary copy operations create shallow Copies
// shallow copy :- Share the same reference point
// deep copy :- Don't share same reference point

const myArr = [0, 1, 2, "hiii", true, 5]
// console.log(myArr[2])                     // 2
// console.log(myArr[4])                     // true

const myArr2 = new Array(0, 1, "world", false, 6)
// console.log(myArr2[4])                    // 6

//Array methods

myArr.push(10)                          // To insert an element at end
// console.log(myArr)
myArr.pop()                             // To remove elem from end
// console.log(myArr)
myArr.unshift(-1)                       // To insert element at beginning
// console.log(myArr)
myArr.shift()                           // To remove elem from beginning
// console.log(myArr)               
// console.log(myArr.includes('hiii'))  // Check if elem is present in the array
// console.log(myArr.indexOf('hiii'))

const newArr = myArr.join()             // joins a array in the form of string

// console.log(myArr)
// console.log(typeof myArr)            // object
// console.log(newArr)
// console.log(typeof newArr)           // string

// slice , splice

console.log("Og : " , myArr)            // Og :  [ 0, 1, 2, 'hiii', true, 5 ]

const myn1 = myArr.slice(1,4)           // include indices [1,4) of the array
console.log(myn1)                       // [ 1, 2, 'hiii' ]
console.log("Slice : " , myArr)         // Slice :  [ 0, 1, 2, 'hiii', true, 5 ]

const myn2 = myArr.splice(1,4)          // include indices [1,4] and remove these elements from the original array
console.log(myn2)                       // [ 1, 2, 'hiii', true ]
console.log("Splice : ",myArr)          // Splice :  [ 0, 5 ]