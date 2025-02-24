/**
 * STRING MANIPULATION:
 * 
 * 0: String Manipultaion is the process of modifying, manipulating, or working with string values in various ways. Strings
 * being immutable in JavaScript, cannot be directly altered. instead, string manipulation methods create new strings 
 * based on the original.
 * 
 * 
 * 
 * 
 */

// 1. With operators //

+ // Concatenation Operator // used to join strings together
let str1 = "Christian";
let str2 = "Hermann";
let result = str1 + " " + str2;  // Adds a space between the words
console.log(result);  // Output: "Christian Hermann"

Backticks `` // Template Literals // Allow you to embed expressions and variables inside a string
let firstName = "Christian";
let lastName = "Hermann";
let greeting = `Hello, ${firstName} ${lastName}!`;  // Embedding variables inside a string
console.log(greeting);  // Output: "Hello, Christian Hermann!"

// 2. With string methods //

.length // gets the length of a string
let string = "Christian";
let length = string.length;  // Output: 9

join() // Combines elements of an array into a string
const fruits = ["apple", "banana", "orange"];
const result = fruits.join(" - ");
console.log(result); // Output: "apple - banana - orange"

split() // splits a string into an array of substrings
let string = "apple,banana,orange";
let array = string.split(",");  // Output: ["apple", "banana", "orange"]

includes() // checks if a string includes a substring
let string = "Hello, world!";
let containsWorld = string.includes("world");  // true

CharAt() // Gets a character at a specific position
let str = "Christian";
let char = str.charAt(1);  // "h"

let string = "Christian";
let upperStr = str.toUpperCase();  // "CHRISTIAN"
let lowerStr = str.toLowerCase();  // "christian"