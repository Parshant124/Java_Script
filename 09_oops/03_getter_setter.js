// get :- value ko class ke bahr return krta hai
// set :- value ko class mein variable mein store krta h

// dono ek saath hi exist krte hai, i.e. agr ek liya to dusra bhi lena pdega
// same name as that of variable name in the constructor
// use different name in get/set to prevent stack overflow

class User{
    constructor(username,id){
        this.username = username
        this.id = id
    }

    set id(value){
        this.idSet = (value+" SET")     // if we used this.id here then it would lead to call stack overflow
    }
    get id(){
        return this.idSet
    }
}

const cust1 = new User("Parshant","11DA")
console.log(cust1.username, cust1.id)       // Parshant 11DA SET