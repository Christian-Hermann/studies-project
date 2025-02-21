/**
 * DATATYPES:
 * 
 * 0: Datatypes in JavaScript classify and define the kind of values a variable can hold 
 * and the operations that can be performed on it, each value has a data type, defining
 * its nature.  
 * 
 * 
 * There are two main categories of datatypes: primitive and non-primitive.
 * 
 * 
 * 
 */


// 1. Number // 
   Example: 1, -1, 500, 3.14, 


// 2. String // 
   Example: "Christian", "Hermann"


// 3. Boolean // 
   Example: true, false


// 4. Array //
    Example: [1, 2, 3, 4]


// 5. Object //
const person = {
    firstName: "Christian",
    lastName: "Hermann",
    age: 40
}
    

// 6. Function //
function greet() {                  // Function keyword declares greet 
    console.log("Hello, World!");   // When function is invoked - prints to the console
}


// 7. Undefined //
let myVar; // variable is declared but unassigned
console.log(myVar); // Output: undefined


// 8. null //
let myVar = null;
console.log(myVar); // Output: null


// 9. NaN //
const result = 0 / 0;
console.log(result);     // outputs: NaN


// 10. Infinity && -Infinity //



// 11. What is the difference between primitive/simple and complex data types



// 12. Primitive values ae passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, 
// and how are they different