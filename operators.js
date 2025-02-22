/**
 * OPERATORS:
 * 
 * 0: Operators are special symbols or keywords that are used to perform operations on values.
 * 
 */


// 1. Assignment operators //

= // Simple Assignment // Assigns the value on the right the variable on the left
+= // Add and assign // Adds the right operand to the left operand and assigns the result to the left operand.
-= // Subtract and assign // Subtracts the right operand from the left and assigns to the left
*= // Mulitply and assign // Multiplies the left operand by the right and asigns the result to the left
/= // Divide and assign // Divides the left operand by the right and assigns the result ot the left
%= // Modulus and assign // Takes the modulus of the left operand with the right and assigns the result to the left

let x = 10;
x += 5;  // x = x + 5 → 15
x -= 3;  // x = x - 3 → 12
x *= 2;  // x = x * 2 → 24
x /= 4;  // x = x / 4 → 6
x %= 5;  // x = x % 5 → 1


// 2. Arithemtic operators //

+ // Addition // Ads to operands
- // Subtraction // Subtracts the right operand from the left operand
* // Multiplication // Multipplies to operands
/ // Division // Divides the left operand by the right operand
% // Modulus // Returns the remainder when the left operand is divided by the right operand
++ // Increment // Increases the value of a variable by 1
-- // Decrement // Decreases the value of a ariable by 1

let a = 5;
let b = 3;
console.log(a + b); // 8
console.log(a - b); // 2
console.log(a * b); // 15
console.log(a / b); // 1.6667
console.log(a % b); // 2


// 3. Comparison operators //

== // Equal to // Compares values, ignores the type
=== // Strictly equal to // Compares value and type
!= // Not equal to // returns true if the values are not equal
!== // Strict not equal to // returns true if the values or types aren't equal
> // Greather than // Returns true if the left operand is gretaer than the right
< // Less than // Returns true if the left operand is less than the right operand
>= // Greater than or equal too // Returns true if the left operand is greater than or equal to the right
<= // Less than or equal to // Returns true if the left operand is less than or equal to the right

console.log(5 == "5");  // true (type conversion occurs)
console.log(5 === "5"); // false (strict comparison)
console.log(10 > 5);    // true
console.log(3 <= 5);    // true


// 4. Logical operators //

&& // returns true if all operands are truthy
|| // returns true if a tleast one operand is truthy
! // inverts the boolean value of its operand

console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false


// 5. Urnary operators (!, typeOf, - ) //
// 1: Unary operators operate on a single operand to produce a new value

! // inverts the boolean value of the operand
const x = true;
console.log(!x); // Outputs: false

typeof // returns a string indicating the datatype
const x = 5;
console.log(typeof x); // Outputs: 'number'

- // converts its operand to a number and negates it 
const a = '5';
const b = -a; // b is now the number -5

// 6. Ternary operators ( a ? b : c ) //
// 1: Evaluates a condition and returns one of two values based on whether the condition is true or false
condition ? value_if_true : value_if_false

const age = 21;
const canDrink = age >= 21 ? 'Yes' : 'No';
console.log(canDrink); // Outputs: Yes