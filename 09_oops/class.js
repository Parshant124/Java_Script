// class User{
//     constructor(username,rollNo){
//         this.username = username
//         this.rollNo = rollNo
//     }

//     nextRoll(){
//         return (this.rollNo+1)
//     }

//     printMe(){
//         console.log(`Username: ${this.username}`)
//     }
// }

// const stud = new User("Parshant",118)

// stud.printMe()         // Username: Parshant
// console.log(stud.nextRoll())    // 119




// How this class works

function User(username,rollNo){
    this.username = username
    this.rollNo = rollNo
}

User.prototype.nextRoll = function(){
    return (this.rollNo+1)
}

User.prototype.printMe = function(){
    console.log(`Username: ${this.username}`)
}

const stud = new User("Parshant",118)

stud.printMe()         // Username: Parshant
console.log(stud.nextRoll())    // 119


// INHERITANCE

// class student extends User{     // student will inherit User
//     constructor(username,rollNo,email){
//         super(username,rollNo)      // constructor call for User(parent class)
//         this.email = email
//     }
// }       