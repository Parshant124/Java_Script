const accountId = 1234                    // Value cannot be changed
let accountEmail = "parsh@gmail.com"      // let and var do the same kinda work but let handle the scope resolution thing more accurately so prefer not to use var
var accountPass = "123456"
accountCity = "Jaipur"                    // possible to directly initialize but not a good practice

console.log(accountId)
console.table([accountId,accountEmail,accountPass,accountCity]) // To print multiple variables at once

accountEmail = "par.com"                  // Values can be changed except for const
accountPass = "1234"
accountCity = "Mansa"

let accountNo ;                          // only defining , print undefined

console.log("After changing the values : ")
console.table([accountId,accountEmail,accountPass,accountCity,accountNo])