// object

const username = "NAME"
const user = {
    username: "Parshant",
    loginCount: 14,
    signedIn: true,

    getUserDetails: function(){
        console.log(username)      // NAME
        console.log(this.username) // Parshant
        console.log(this)          // same output as line 19 i.e. user-object
    },
    getDetails: function(){
        return this.signedIn;
    }
}

console.log(user)
user.getUserDetails()
console.log(user.getDetails())

