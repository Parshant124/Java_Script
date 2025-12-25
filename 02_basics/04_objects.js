const User = Object.create     // Singleton object  
// const User = {}              // Literal object

User.id = "123"
User.Name = "Parshant"
User.age = 21

// console.log(User)


// Nested Objects

const other_User = {
    email: "1234@google.com",
    fullname:{
        username:{
            firstname: "Parshant",
            lastname: "Jangid"
        }
    },
    age: 21
}

// console.log(other_User.fullname.username)
// console.log(other_User["fullname"]["username"])         // Both do the same work

// Adding two objects

const obj1 = {'a': 1, 'b': 2};
const obj2 = {'c': 3, 'd': 4};

// const obj3 = Object.assign(obj1, obj2)                  // Here target object in obj1, i.e. obj1 is modified    
// console.log(obj3)                                       // { a: 1, b: 2, c: 3, d: 4 }
// console.log(obj1)                                       // { a: 1, b: 2, c: 3, d: 4 }

// const obj3 = Object.assign({}, obj1, obj2)              // Both gives same output in obj3 , here target object is {} i.e. empty object
// console.log(obj3)                                       // { a: 1, b: 2, c: 3, d: 4 }
// console.log(obj1)                                       // {'a': 1, 'b': 2}

const obj3 = {...obj1, ...obj2}                            // via spread operator
// console.log(obj3)



// Object operations

// console.log(Object.keys(User))                          // [ 'id', 'Name', 'age' ]
// console.log(Object.values(User))                        // [ '123', 'Parshant', 21 ]
// console.log(Object.entries(User))                       // [ [ 'id', '123' ], [ 'Name', 'Parshant' ], [ 'age', 21 ] ]

// console.log(User.hasOwnProperty('Name'))              // To check if a certain key is present or not

