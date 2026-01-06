// const storeProm = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log("Async func executed")
//         resolve()       // will be called for then
//     },1000)
// })

// storeProm.then(()=>{
//     console.log("Resolve 1 is clear")
// })

// // wtihout storing in other variable

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async func 2 executed")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("Resolve 2 executed")
// })

// const promise3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({username: "Parshant",course: "Chai aur JS"})
//     },1000)
// }).then((data)=>{
//     console.log(data)               // { username: 'Parshant', course: 'Chai aur JS' }
//     console.log(typeof data)        // object
// })


// using reject

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username: "Parshant",course: "Chai aur JS"})
//         }else{
//             reject('ERROR!!! File not opened')
//         }
//     },1000)
// }).
//   then((data)=>{
//     console.log(`Data fetched: ${data}`)
// }).
//   catch((message)=>{
//     console.log(message)
// })


// // nested then

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{        
//         resolve({username: "Parshant",course: "Chai aur JS"})
//     },1000)
// })
//     .then((data)=>{
//     console.log(data)
//     return data.username    // arguement for the next then
// })
//     .then((name)=>{
//     console.log(`Name fetched:${name}`)
// })


// finally

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({username: "Parshant",course: "Chai aur JS"})
//         }else{
//             reject('ERROR!!! File not opened')
//         }
//     },1000)
// })
//   .then((data)=>{
//     console.log(`Data fetched: ${data}`)
// })
//   .catch((message)=>{
//     console.log(message)
// })
//   .finally(()=>{            // default: will be executed at the end.
//     console.log("Either resolved or rejected")
// })

// // async-await  :- wait till the promise is executed and can't directly handles errors

// // syntax

// const promise5 = new Promise()      // store Promise in a variable

// async function funcprom5(){         // creating async function
//     const response = await promise5 // awaiting till the Promise is executed and storing its hope in a var
//     console.log(response)
// }

// funcprom5()                         // calling function

// handling error

// const promise5 = new Promise()     

// async function funcprom5(){         
//     try{
//         const response = await promise5      // checks for the error
//         console.log(response)
//     } catch(error){
//         console.log(error)
//     }
// }

// funcprom5()    


// implementation

// async function gitFetch(){
//     const response = await fetch('https://api.github.com/users/Parshant124')
//     const data = await response.json()
//     console.log(data.login)
// }

// gitFetch()

// other Way

fetch('https://api.github.com/users/Parshant124')
.then((resp)=>{
    return resp.json()
})
.then((data)=>{
    console.log(data.login)
})
.catch((error)=>{
    console.log(error)
})