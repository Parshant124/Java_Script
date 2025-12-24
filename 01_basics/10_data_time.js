// Dates 
// starts from 1 jan 1970

let myDate = new Date()

// console.log(myDate)                         // 2025-12-24T06:53:36.447Z
// console.log(myDate.toString())              // Wed Dec 24 2025 12:23:36 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString())          // Wed Dec 24 2025
// console.log(myDate.toISOString())           // 2025-12-24T06:53:36.447Z
// console.log(myDate.toLocaleString())        // 24/12/2025, 12:23:36 pm
// console.log(myDate.toLocaleDateString())    // 24/12/2025

// console.log(typeof myDate)                  // object

// Manual date

let myCreatedDate = new Date(2025 , 2 , 4)    // Months are 0-indexed
// console.log(myCreatedDate.toLocaleDateString())  // 4/3/2025

let secondDate = new Date(2025 , 2 , 4 , 8 , 30) // (YYYY , MM , DD , HH , MM)
// console.log(secondDate.toLocaleString())         // 4/3/2025, 8:30:00 am

let myTimeStamp = Date.now()                // Gives time in milisecond since 1/jan/1970 
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())        // Give time diff b/w given date and 1/jan/1970 in ms

// To get value in seconds
console.log(Math.floor(Date.now()/1000))

// We can also customize the formats of date and time

secondDate.toLocaleDateString('default' , {         // It will customize the output format for toLocaleString function call
    weekday : 'long',
})
