// IIFE => Immediately invoked function execution

(
    function call(){    // named IIFE
        console.log("Function Called!!!")
    }
)();            // ; is neccesary

// here two () is used, where outer() is used to define scope and other for calling,
// It is useless to prevent function from global scope pollutions

(
    () => {         // unnammed IIFE
        console.log("Again called!!!")
    }
)();            

// with parameters

(
    (name)=>{       // IIFE with parameters
        console.log(`Hello, ${name}`)
    }
)("Parshant")