/**
 * CONTROL FLOW:
 * 
 * 0: Control flow is the order in which the computer executes statements in a script.
 * Code is run in order from the first line in the file to the last line, unless the 
 * computer runs across the (extremely frequent) structures that change the control flow, 
 * such as conditionals and loops.
 * 
 * Control flow statements like if, else if, and else allow for the exection of speciific
 * code blocks based on whether a condition is true or false. This enables programs to make
 * decisions and respond dynamically to different inputs or situations. 
 * 
 */

// 1. If // code to execute if the consdition is true

let age = 21;
if (age === 21){
    console.log("You are 21 years old. You're old enough to drink.") // since the condition is true it prints to the console
}

// 2. Else-if // if frst condition is not true moves to the next

let age = 22;
if (age === 21){
    console.log("You are 21 years old. You're old enough to drink.") // since the condition is not true it is skipped
} else if (age > 21){
    console.log("You are older than 21 years old and are able to drink") // true, and logged to the console
}


// 3. Else // if no conditions are met then we hit the else statement

let age = 22;
if (age === 21){
    console.log("You are 21 years old. You're old enough to drink.") // since the condition is not true it is skipped
} else if (age > 21){
    console.log("You are older than 21 years old and are able to drink") // true, and logged to the console
} else {
    console.log("You're under 21 and not old enought to drink") // if the other conditions are not met this will print to the console
}


// 4. Switch // We use (true) to allow the conditions inside each case
             // to evaluate as Boolea nexpressions.
             // each case checks to meet a condition just like a conditional statement.
             // default acts as else in this situation

let age = 21;

switch(true){
    case (age === 21):
        console.log("You are 21 years old. You're old enough to drink.")
        break;
    case (age > 21):
        console.log("You are older than 21 years old and are able to drink")
        break;
    default:
        console.log("You're under 21 and not old enought to drink")
}