// for of objects ke liye run nhii hota, for in hota h

const games={
    'game1': "BGMI",
    'game2': "Chess",
    'game3': "GOW"
}

// for(const key in object){
// }

// for(const key in games){
//     console.log(key)            // will print all the keys only
//     console.log(`${key} => ${games[key]}`)
// }

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(const it in arr){
//     // console.log(it)         // returns index of the array in a loop
//     console.log(arr[it])        // values
// }

const map = new Map()
map.set("IN","India")      
map.set("USA","United States of America")
map.set("FR","France")

for(const [key, value] in map){
    console.log(key,"   ", value) // no error and no output, bcoz map is not iterable
}