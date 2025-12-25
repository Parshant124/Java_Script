// Singleton
// Object.create        // Constructor method 

// Object Literals
// const obj = {}

const mySym = Symbol("123")

const User = {
    name: "Parshant",
    age: 20,
    [mySym]: "key12",              // Use [] while writing Symbol as a key
    location: "Sardulgarh",
    pass: "1234"
}
// By Default object, keys ko as a string store kr leta hai.

// console.log(User.pass)
// console.log(User["pass"])   // Another way to access , isme key ko as a string pass krna pdega
//                             // Usable mainly when our key contains spaces
// console.log(User[mySym])           // Only way to access a Symbol
// console.log(typeof User[mySym])    

User.age = 21               // To change values in object
Object.freeze(User)         // To lock the object from further changes
User.age = 23
console.log(User)       