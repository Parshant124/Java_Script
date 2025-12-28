const numb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array.forEach( callback Function{
//    }
// )

// numb.forEach(function (item) {          // callback function don't have a name
//         item = item + 2;
//         console.log(`new value : ${item}`)      // original array not changed
//     }
// )

// via arrow function

// numb.forEach( (item) => {
//     item = item + 2;
//     console.log(`new value : ${item}`)      // works same
// })




// function addTwo(item){
//     console.log(item+2);
// }

// numb.forEach(addTwo)        // We will only give reference
// addTwo is reference
// addTwo() is execution
// addTwo(){} is declaration

// numb.forEach((item, index, arr) => {     // here it access multiple items form array not just the values
//     console.log(item, index, arr)
// })


// now in case of array of objects

const coding = [{
        name: "java",
        exe: "java"
    },
    {
        name: "python",
        exe: "py"
    },
    {
        name: "c++",
        exe: "cpp"
    }
]

coding.forEach( (item) => {
    // item , refers to the object
    console.log(item)
    console.log(item.name)
    console.log(item.exe)
})

