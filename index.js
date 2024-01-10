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

// 7-Create two numbers, save them in the variables number1 and number2. Add these two variabels together and save the result in a new variable that you log to the console.
let number1 = 25;
let number2 = 10;
let result = number1 + number2;
console.log(result);

// 8  Reuse the number1 and number2 variables and create three new variables:
// result1 should contain the difference (subtraction) between the numbers
// result2 should contain the product (multiplication) of the two numbers
// result3 should contain the quotient (division) of the two numbers
// Log them all to the console.

let minus = number1 - number2;
console.log(minus);
let multiplication = number1 * number2;
console.log(multiplication);
let division = number1 / number2;
console.log(division);
// output : 15
// 250
// 2.5

// 9 Create a variable a and assign it a value. Log it to the console. Now add 5 to a by reassigning the value of a by using the existing a and the number 5. Log it to the console.
let a = 10;
console.log(a);
a +=5;
console.log(a);
// it can be written as also
a = a+12;
console.log(a);
// 10 What is the value of a in the console.log?
let a = 10;
a = a - 4;
a = 7;
a = a + 2;
console.log(a);
// output:  9.

// 11 Explain each line of code in the previous question for a friend.
/* 
The value of a will be 9 because :
We declare a variable  a and initialize it to 10.
We subtract 4 from a and assign the result (6) back to a.
We assign the value 7 to a.
We add 2 to a and assign the result (9) back to a.
Then we log the value of a to the console using console.log(a).
So, when we run this code, the value of a that gets logged to the console is 9.
 */