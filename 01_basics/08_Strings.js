const name = "Parshant"                 // Primitive string
const age = 20

console.log("name : " + name + " age: " + age )
console.log(`Name : ${name} Age : ${age}`)         // Prefer this type due to clean code and readability

const name1 = new String("Parshant")   // String object
                                       // same as initialized above , only difference is that it is initialized via object explicitly while in the above implicitly
console.log(name1)                     // Will be treated as object
console.log(name1[2])
console.log(name)
console.log(name[2])

// using new String is not a good choice right now as modern js handles the primitive string to use functions
//(vo string ko temporarily object bnake , heap mein store krke uspe function apply krke fir usse heap se nikaal deti h)