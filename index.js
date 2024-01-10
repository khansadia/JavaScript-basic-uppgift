// Write out Hello World! in the console.
console.log("Hello World");

//1-Declare a variable age and assign your age to it. Write it out in the console together with a description of the age. Like, "this is my age...".
const age = 35;
console.log("This is my age:", age);

// 2-Declare three variables using the three different keywords that we have learned. Write them all out in the console. What was the different between these keywords?
var varVariable = "A var variable"; //function-scoped and it can be reassigned
const constVariable = "A const variable"; // block-scoped and it can't be reassigned
let letVariable = "A let variable"; //block-scoped and it can be reassigned
console.log(varVariable, constVariable, letVariable,);
// Output: A var variable A const variable A let variable

// 3-Declare three different variables, one of each data type. Assign them values and log them to the console in three different logs.
let oneString;
let oneNumber;
let oneBolean;
oneString = "Hello JavaSc";
oneNumber = 55;
oneBolean = false;
console.log(oneString);
console.log(oneNumber);
console.log(oneBolean);
/* output: Hello JavaSc 
55
false */

// 4-Create a const variabel called name and assign a value to it. Log it to the console. On a new line, try to reassign the value. Log that to the console. Does it work? If it doesn't, think about why that is. How would you correct it?
const name = "sadia";
console.log(name);
// name = 'anotherName';
// console.log(name);
// doesn't work, can correct it by changing the keyword to 'let' instead of 'const'


// 5-Think about one case when we would like to use a boolean value. Discuss it with another person.
let isEmail = true;
// Email validation to access email functionality

// 6-If we create a variable that we know is not going to change its value during the duration of our program, should we declare it using let or const and why?
// if you create a variable that you know is not going to change its value during the duration of your program, you should declare it using const instead of let. This is because const variables are read-only and cannot be reassigned once they are declared .
// Using const instead of let can help prevent accidental reassignment of a variable, which can lead to bugs and make your code harder to maintain 
