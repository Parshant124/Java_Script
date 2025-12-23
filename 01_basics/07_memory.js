// Memory is of two type : Stack and Heap

// Stack used for primitive data type and function call frames , copy values
// Heap used for non-primitive data type , take reference of the value

// Stack memory

let str1 = "1234"
let str2 = str1;
str2 = "123"

console.log(str1)
console.log(str2)
// Here str2 only copy the value of str1 , so str2 mein change krne se str1 mein kucch change nhi hoga as both are different



// Heap memory

let user1 = {
    name:"User1",
    id:32
}
let user2 = user1

user2.name = "User2"
console.log(user1)
console.log(user2)
// In Heap memory , heap mein ek object create hoga jo name and id ko store krega and user1 uss object ko point krega,
// user2 = user1 , krne se user2 bhi ussi object ko point krega jise user1 point kr rha tha
// ab jb dono same object ko point kr rhe hain to user2 mein change krne se user1 mein bhi change hoga