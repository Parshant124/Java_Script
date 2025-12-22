let score = undefined

let convers = Number(score)
console.log(typeof(score))
console.log(score)
console.log(typeof(convers))  // typeof(a) and typeof a is same
console.log(convers)          

//"50"          string     =>  50    number   string contained the pure number
//"5a"          string     =>  NaN   number   Nan stands for Not a Number , but its type is a number
//null          object     =>  0     number
//undefined     undefined  =>  NaN   number
//true          boolean    =>  1     number
//""            string     =>  false boolean   Empty string is considered as false
//"Any_sentece" string     =>  true  boolean   String with elements is considered as true