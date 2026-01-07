// const myHeros = ["Ironman","SpiderMan"]

// const heroPower = {
//     Ironman: "Intelligence",
//     SpiderMan: "Web Shooter"
// }

// Object.prototype.obj = function(){
//     console.log("Now it will be present in object(base)")
// }

// Array.prototype.arr = function(){
//     console.log("Added in arrays, not accessible by object")
// }

// heroPower.obj()      // works
// myHeros.obj()        // works

// // heroPower.arr()      // ERROR
// myHeros.arr()        // works

// // It follows inheritance, object is parent and (array, string. function, ...) is its child


// Prototypal inheritance

const user = {
    username: "Parshant",
    pass: 1234
}

const Teacher = {
    makeVid: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,

    __proto__: user         // TO inherit inside the object
}

// Teacher.__proto__ = user    // to inherit outised the object

// console.log(user.username)
// console.log(Teacher.username)
// // console.log(TeachingSupport.username)   // Error bcoz isme inherit nhi kiya
// console.log(TASupport.username)


// modern syntax

Object.setPrototypeOf(Teacher, user)    // Teacher inherits user
console.log(Teacher.username)