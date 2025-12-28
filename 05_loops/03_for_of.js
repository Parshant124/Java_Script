const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const greetings = "Hello World!!!"

// for of
// for(const iterator of object){
// }

// // print all elements in the array
// for(const it of arr){       
//     console.log(it)
// }

// // print all letters of the string
// for(const it of greetings){
//     console.log(it)
// }

// Maps : Collection of key-value pairs, key is unique

const map = new Map()
map.set("IN","India")       // map.set(key, value)
map.set("USA","United States of America")
map.set("FR","France")
map.set("IN","Indian")      // will change the present value, not add a new one

// for(const it of map){
//     console.log(it)
// }

// de-structure of map
// for(const [key, value] of map){
//     console.log(key ," :- ", value)
// }

const games={
    'game1': "BGMI",
    'game2': "Chess",
    'game3': "GOW"
}

// for(const key of games){        // ERROR
//     console.log(key)
// }

 