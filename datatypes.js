/**
 * DATATYPES:
 * 
 * 0: Datatypes in JavaScript classify and define the kind of values a variable can hold 
 * and the operations that can be performed on it, each value has a data type, defining
 * its nature.  
 * 
 * 
 * There are two main categories of datatypes: primitive and complex.
 *
 * Primitive include: string, number, boolean, undefined, NaN
 * Complex include: array, function, object
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
function greet() {   // Function keyword declares greet 
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
// Infintiy and -Infinity are part if the Number datatype, it is a global property that represents a
// value greater than any numerical value

const positiveInfinity = Infinity;
console.log(positiveInfinity);       // Outputs: Infinity

const negativeInfinity = -Infinity;
console.log(negativeInfinity);       // Outputs: -Infinity


// 11. What is the difference between primitive/simple and complex data types

// Primitiva data types are fundemantal bulding blocks, representing basic units of information. Complex
// data types are constructed from primitive types, allowing more intricate data structures. Primitive date 
// types are immutable and stoe a single value directly in memory. Complex data types are mutable and store
// collections of values, holding refernces to memory locations.


// 12. Primitive values ae passed to a function BY COPY, complex values are BY REFERENCE. What does that mean, 
// and how are they different.

// When you pass a value to a function, the way that it can be handled depends on whehter it is a primitve 
// or complex datatype.

// When you pass a primitive value to function a copy is made. This means that any changes made to the parameter 
// inside the function do not affect the original variable outside the function.

function modifyValue(n) {
    n = 5;
    console.log(n);     // Outputs: 5
  }

  let x = 10;
  modifyValue(x);
  console.log(x);       // Outputs: 10

// In this example, x remains 10 after the function call because n inside the function is a copy of x


// When you pass a non-primitive value to a function, a refernce to the original is passed. So, changes
// made to the paramter inside the function can affect original balue outside of the function

function modifyObject(obj) {
    obj.name = 'Christian';
    console.log(obj);                // Outputs: { name: 'Christian' }
  }
  
  let person = { name: 'Lisa' };
  modifyObject(person);
  console.log(person);               // Outputs: { name: 'Christian' }

// In this example person is modified because obj inside the fuction references the same object as person