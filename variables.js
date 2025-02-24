/**
 * VARIABLES:
 * 
 * 0: Variables are labels or conatiners that store pieces of information. You can assign any type
 * of data to a variable such as strings, numbers, objects and functions. 
 * 
 * Variables should follow certain rules, they can contain letters, numbers, underscores, and dollar 
 * signs, but must start with a letter, underscore, or dollara sign. And they are also case-sensitive. 
 * It is impotant to use meaningful, descriptive names for variables to improve readability oof your code.
 * 
 * 
 */

// 1. Declaration and assignment //
// Declaration // refers to creating a variable by using the var, let, on const keywords
// Assignment // refers to giving a variable a value which is done using the (=) operator
// Reassignment // reassingment happens when you change the value in an already stored variable

// Declaration
var city;

// Assignment
var city = "New Orleans";
console.log(city);  // Output: New Orleans

// Reassignment
 var city = "Chicago";
console.log(city);  // Output: Chicago

// 2. var, let, const //

// var //
// Function or Global scoped, Hoisted (initialized to undefined), can redeclare in the same scope, can reassign

// let //
// Block Scopee, Hoisted (temporal dead zone), cannot redeclare in the same scope, can reassign

// const //
// Block scope, Hoisted (temporal dead zone), cannot redeclare in the same scope, cannot reassign


// var //
// Declaration
var city;

// Assignment
city = "New Orleans";
console.log(city);  // Output: New Orleans

// Reassignment
city = "Chicago";
console.log(city);  // Output: Chicago

// let //
// Declaration and assignment
let age = 40;
console.log(age);  // Output: 40

// Reassignment
age = 41;
console.log(age);  // Output: 41

// const // 
// Declaration and assignment
const city = "New Orleans";
console.log(city);  // Output: New Orleans

// Trying to reassign (This will cause an error)
city = "Chicago";  // Error: Assignment to constant variable.


// 3. Hoisting //
// Hoisting is a behavior where variable and function decalrations are moved to the top
// or "hoisted" to the top of their scope during the compile phase before the code is exectued. 
// 
// JavaScript processes variable and function declarations before running the code.

// Hoisting with variables

// var // only the declaration is hoisted not the initialization
// let and const // both are hoisted but not initialized

let a;        // Declaration is hoisted, but initialization happens later
console.log(a);  // ReferenceError: Cannot access 'a' before initialization
a = 10;       // Initialization 

// Hoisting with functions

// the entire function, declaration and defintion is hoisted. Yuo can call the function
// before its declaration

greet();  // Output: "Hello"
function greet() {
  console.log("Hello");
}

sayHello();  // TypeError: sayHello is not a function
var sayHello = function() {
  console.log("Hi");
};

