const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const var_name = Array.filter( (val) => condition )

const num_val = numb.filter( (item) => item > 4 )   // implictit return

// const num_val = numb.filter( (item) => {         // explicit return
//     return item> 4
// })
// console.log(num_val)

// const num_map = numb.map( (item) => item > 4)       // return an array of true and false
// console.log(num_map)

// Chaining :- Using multiple maps and filters sequentially

const my_numb = numb
                    .map( (num) => num*10)
                    .map( (num) => num/3)
                    .filter((num) => num > 20)

console.log(my_numb)
console.log(numb)
// filter :- Only return the values which are true
// map :- will perform full iteration and can return any value