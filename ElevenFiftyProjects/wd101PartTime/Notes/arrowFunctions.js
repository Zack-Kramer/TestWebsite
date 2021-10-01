/*
- Also called Fat Arrow Functions
- They are NOT (function) declarations
-Because they are not expressions, they do not get hoisted
- Two Types:
    - Concise Body --> Return is automatic
    - Block Body --> Return is NOT automatic
- A concise way to write function expressions
*/

// CONCISE BODY
//speak('dog');
let speak = (name) => console.log(`The ${name} goes woof!`);

speak('dog');

let firstname = "Peter";
let lastname = "Parker";

let concatName = (first, last) => `${first} ${last}`;
let fullName = concatName(firstname, lastname);
console.log(fullName);

// BLOCK BODY
// Use {curly bros} to contain the logic
let speakAgain = name =>  {
    console.log(`The ${name} goes woof! - Line 27 Console.log`)
}

speakAgain('dog');

let newname = (first, last) => {
    return `${first} ${last}`
}

let newFullName = newname(firstname, lastname);
console.log(newFullName)

let x = 27;
let y = 47;

let sum = (num1, num2) => {
   return num1 + num2
}

let returnedValue = sum(x,y);
console.log(returnedValue);