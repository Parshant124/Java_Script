console.log(2>1);   // true

console.log("5"<6); // true
// automatically converts the string to number

console.log("5a"<6); //false , it considers string and number differntly i.e. no conversion here

console.log(null > 0); // false
console.log(null==0);  // false
console.log(null>=0);  // true
// bcoz operators (> , >= . < , <=) converts null into 0 ; while == don't do so.
// undefined hr case mein false hi dega


// === -> known as strict check

console.log("5"==5)    //true
console.log("5"===5)   //false
//In 2nd case it also checks the datatype , as datatype is mismatched one is string and other number so it gives false