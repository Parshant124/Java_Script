const marvel_heros = ["IronMan","SpiderMan","Hulk"]
const dc_heros = ["SuperMan","BatMan","Flash"]

// marvel_heros.push(dc_heros)         // modifies the 1st array 
// console.log(marvel_heros)           // [ 'IronMan', 'SpiderMan', 'Hulk', [ 'SuperMan', 'BatMan', 'Flash' ] ]

// const all_heros = marvel_heros.concat(dc_heros)  // add two arrays and return it in another array
// console.log(all_heros)

// const all_new_heros = [...marvel_heros, ...dc_heros] // ... is a spread operator
// console.log(all_new_heros)

// const another_array = [1, 2, 3, [2,3,4] ,5 ,6 ,[7,8,[9,8,6]]]   // Here depth is 2 as of [[7,8,[9,8,6]]] element
// const usable_array = another_array.flat(Infinity)               // Here Infinity is depth, how much do we have to flat it. 
// console.log(usable_array)                                       // [1, 2, 3, 2, 3, 4, 5, 6, 7, 8, 9, 8, 6 ]

// console.log(Array.isArray("Parshant"))      // Not an array
// console.log(Array.from("Parshant"))         // converted to array
// isArray and from are functions of the object Array.

// console.log(Array.from({name: Parshant}))    // [] , cannot directly convert object into array,
                                             // we have to specify ki hamein key ka array bnana hai ya values ka

let mark1 = 10
let mark2 = 13
let mark3 = 15

console.log(Array.of(mark1, mark2, mark3))
//console.log(Array.from(mark1, mark2, mark3))  // Error