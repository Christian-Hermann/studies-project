/**
 * LOOPS:
 * 
 * 0: Loops are control flow statements that allow for the repeated execution of a block of code.
 *  Thet are used for reptiitive tasks and iterating over data structures.
 * 
 * 
 * 
 * 
 * 
 */

// 1. Explain While, for, and for-in loops.

// 1: A for loop is used when you already know how many times you want to execute a statement.
for (initialization; condition; increment/decrement) {
    // Code to be executed
  }

// 2: A while loop executes a block of code as long as a condition evaluates to true.
while (condition) {
    // Code to be executed as long as the condition is true
  }

// 3. A for...in loop isused to iterate over an objects keys
for (let key in object) {
    // Code to be executed for each property (key) in the object
  }


// 2. Be able to loop any number of times, forward counting up to some limit, backward
// counting down to zero. 

const limit = 5; // Set the limit for counting up
for (let i = 0; i <= limit; i++) {
  console.log(i); // Outputs: 0, 1, 2, 3, 4, 5
}

const limit = 5; // Set the limit for counting down
for (let i = limit; i >= 0; i--) {
  console.log(i); // Outputs: 5, 4, 3, 2, 1, 0
}

// 3. Loop over an Array, forwards and backwards

// Forwards:
for (let i = 0; i < 5; i++) {
    console.log(i);                   // Outputs: 0, 1, 2, 3, 4
  }

// Backwards:
  for (let i = 4; i >= 0; i--) {
    console.log(i);                   // Outputs: 4, 3, 2, 1, 0
  }

// 4. Loop over an Object
const person = {
    name: "Christian",
    age: 40,
    city: "New Orleans"
  };
  
  // Looping over the object using for...in
  for (let key in person) {
    console.log(key + ": " + person[key]);
    // Outputs:
    // name: Christian
    // age: 40
    // city: New Orleans
  };