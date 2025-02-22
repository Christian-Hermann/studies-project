/**
 * FUNCTIONS:
 * 
 * 0: Functions are blocks of reusable code that perform a specific task. You can define a function and
 * then call that function whenever you need to execute that task by using different inputs.
 * 
 */


// 1. The two phases to using functions: First we must ______ ? Next we can execute. (Or two
// other words for executing a function?) A function by?

// The two phases to using a function are defining and calling/invoking.
// 1: firs tyou define the function by giving it a name and a set of a paramters if appropriate. Then,
// a block of code whch tells the function what to do.
// 2. Next you call/invoke the function by using its name followed by paranetheses that incude arguments

// Define the function
function greet(name) {
    console.log('Hello, ' + name + '!');
}

// Call / Invoke the function
greet('Christian');                 // Output: Hello, Christian!


// 2. What's the difference between a function's parameters and arguments PASSED to a function?
// 1: Function parameters are placeholders which hold values to be passed into the function when it is called.
// 2: Arguments are the values that are passed into the parameters of the function.

// Function definition with parameters
function greet(name, age) {
    console.log('Hello, ' + name + '! You are already ' + age + ' years old.');
}

// Calling the function with arguments
greet('Christinan', 40); // 'Christian' and 40 are arguments


// 3. What's the syntax for a named function?
// 1: function keyord, funciton name, parentheses(if needed), and a block of code enclosed in curly braces

function functionName(parameter1, parameter2, etc...) {
    // function body : code to be executed
}

// 4. How do we asign a function to a variable?
// 1: you need to create function expression. You define the funtion directly within the assignment.
// THis way you treat the function as a value.

var functionName = function(parameters) {
    // Function body
    
};

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify 
// inputs, and how do we specify outputs?
// 1: Parameters are optional inputs that a function takes. They are place placeholders for arguments
// that pass in values.

function functionName(parameter1, parameter2, ...) {
    // function body : code to be executed
}

// 2: The output is speicifed when we use the return keyword followed by a value. It can also 
// reurn undefined.

function functionName(parameter1, parameter2, ...) {
    // code logic
    return value;  // returning a value
}

// 6. Scope: Functions can see and modify variables in parent or global scopes. 
// The inverse is NOT true. 

// 1: When you define a variable to a funtcion it is only available inside that function and
// the rest of the program does not have acces to it. It prevents unintended side effects. The 
// inverse is that they can modify variables from the globlal scope. 

// Global scope
let globalVar = "I'm a global variable!";

function exampleFunction() {
  // Local scope
  let localVar = "I'm a local variable!";
  
  // The function can access both local and global variables
  console.log(globalVar); // Accesses the global variable
  console.log(localVar);  // Accesses the local variable
}

// Call the function
exampleFunction();

// Trying to access the local variable outside the function
console.log(localVar); // Error: localVar is not defined

// Trying to access the global variable outside the function
console.log(globalVar); // This works, as it's a global variable


// 7. Closures: Functions form closures around the data they house. If an object returned from
// the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and
// data can continue to exist in these closures!

// A closure is when a function is defined inside another function, and it closes the variables 
// from the outer functions scope. Even though the outer function finshed its execution. The inner 
// function still has access to the outer's variables.

function makeFunc() {
    const name = "Mozilla";  // Step 1: A variable `name` is defined inside `makeFunc`
  
    function displayName() {  // Step 2: The `displayName` function is defined inside `makeFunc`
      console.log(name);      // Step 3: `displayName` accesses the `name` variable from the outer scope
    }
  
    return displayName;  // Step 4: `makeFunc` returns the `displayName` function
  }
  
  const myFunc = makeFunc();  // Step 5: `makeFunc` is invoked, and the `displayName` function is returned and assigned to `myFunc`
  myFunc();  // Step 6: `myFunc` is called, which invokes `displayName` and logs `name`
  