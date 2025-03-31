/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/*
The result is the same, but I explicitly converted the string "5" to a number before subtracting 2
*/

let result = Number("5") - 2;
console.log("The result is: " + result);

/*
let isValid = Boolean("false"); is evaluating false as a string, which is truthy.
I removed the quotation marks to make it an actual Boolean value instead of a string.
I could also change "false" to "true" which would make isValid truthy and print an expected result.
*/
let isValid = Boolean(false);
if (isValid) {
    console.log("This is valid!");
}

/*
age was initialized as a string so totalAge did a string concatination instead of number addition.
I converted age to a number in the calculation so it would return the expected result of 30.
*/

let age = "25";
let totalAge = Number(age) + 5;

console.log("Total Age: " + totalAge);


let asANum = 9;
console.log(asANum + " is a " + typeof(asANum));
let asAString = String(asANum);
console.log("Now " + asAString + " is a " + typeof(asAString));
console.log("Now it is a " + Boolean(asANum) + ", or at least 'truthy,' " + typeof(Boolean(asANum)));


let yourAge = '20';
let myAge = 20;
console.log("Are we the same age?");
console.log(yourAge==myAge);

console.log("Are our ages strictly equal?");
console.log(yourAge===myAge);
console.log("Your age is " + yourAge + ", which is a " + typeof(yourAge) + ", and mine is " + myAge + ", which is a " + typeof(myAge));