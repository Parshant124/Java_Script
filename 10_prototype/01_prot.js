// function multBy5(num){
//     return num*5
// }

// multBy5.cust = 45

// console.log(multBy5(4))
// console.log(multBy5.cust)       // inshort object ke jaise cust variable ko store krega
// console.log(multBy5)            // [Function: multBy5] { cust: 45 }

function createUser(username, password){
    this.username = username
    this.password = password
}

createUser.prototype.nameChange = function(){
    console.log("Executed")
    this.username += "  Changed"
}

let userOne = new createUser("Parshant",1234)
let userTwo = new createUser("JAVA",567)

userTwo.nameChange()

console.log(userOne.username)   // Parshant
console.log(userTwo.username)   // JAVA changed

