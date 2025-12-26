// let a = 10
// const b = 20
// var c = 30

// console.log(a)          // 10
// console.log(b)          // 20
// console.log(c)          // 30

// if(true){               // block scope
//     let d = 40
//     const e = 50
//     var f = 60
// }

// // console.log(d)          // error
// // console.log(e)          // error
// console.log(f)          // 60


// Block scope and global scope

let a = 10
let b = 20

if(true){
    let a =100
    console.log("Block Value: ",a)      // 100
    console.log("B: ",b)                // 20
    a = 1                               // will only alter the value inside the block scope
    b = 2
}

console.log("Global Value: ",a)         // 10
console.log("B: ",b)                    // 2