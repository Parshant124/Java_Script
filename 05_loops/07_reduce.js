const myNum = [1, 2, 3, 4, 5]

const Tot = myNum.reduce( function (acc , curr_val){
    console.log(`acc : ${acc}, val : ${curr_val}`)
    return acc + curr_val * 2                      // during iterations acc will store acc+curr_val,
},0)    // 0 here is the initial value of the accumulator   

console.log(Tot)

// In terms of arrow function
// const Tot_2 = myNum.reduce( (acc,val) => acc+val ,0)      // Do the same work

// console.log(Tot_2)

// Useful when you have to add all the values of the array