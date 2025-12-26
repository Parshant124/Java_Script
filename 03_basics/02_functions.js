// Before we only know about static no. of arguements passed , now for dynamic no. of arguements we will use rest operator

function cartPrice(...num1){                // ... acts as both spread and rest operator
    console.log(typeof num1)                // object
    return num1
}

// spread operators opens the bundle(array, object) as individualates the values
// rest operators bundles the values

// console.log(cartPrice(12,23))               // [ 12, 23 ]
// console.log(cartPrice(1,2,3,4,5))           // [ 1, 2, 3, 4, 5 ]
// console.log(cartPrice(23,41,234))           // [ 23, 41, 234 ]
// console.log(cartPrice('a','b','c','d','e')) // [ 'a', 'b', 'c', 'd', 'e' ]


// Object as parameter

const user = {
    username: "Parshant",
    subscription: 999
}

function objectFunc(aObject){
    return `${aObject.username} has a subscription worth ${aObject.subscription}`
}

// console.log(objectFunc(user))                                              // we can pass a pre built object
// // Parshant has a subscription worth 999

// console.log(objectFunc({username: "Next", subscription: 159}))             // or also an object based arguement
// // Next has a subscription worth 159


// Array as parameter

const myArr = [100, 300, 230, 500]

function secondValue(anArr){
    return anArr[1]
}

console.log(secondValue(myArr))                             // 300
console.log(secondValue([1,2,3,4,5,6]))                     // 2