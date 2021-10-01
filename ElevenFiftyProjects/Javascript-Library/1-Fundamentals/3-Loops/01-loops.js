// LOOPS lesson for Eric W.

// Loops are different from functions in that loops allow you to repeat code for an 'x' number of times all at once while functions are a one off.

/* 

There is not one kind of loop, but they all use roughly the same things:
For statement
do while
while
labeled
break
continue
for in
for of
// the following are methods meant for loops
.forEach
.map

Loops are used in programming to automate repetitive tasks and are typically 'conditionally based'. Meaning they are successfully executed when a statement is evaluated as 'true'


Structure:
Loops come in pieces of three:

A. Creation of an indexing variable
B. a run condition
C. a change to the indexing variable.

Simple Loop now: count to ten from 0 and log the numbers:

for (let i = 0; i <= 10; i++){
    console.log(i)
}//

// i is the variable
// anything inside the parenthesis is true, then 


i = 0 is the indexing variable
i <= 10; is the run condition
i++ is the change to the variable
console log is the iteration of the loop

--

for (let i = 0; i <= 10; i++){
    console.log(i)
}

^^ Correct example


// Loops can run infinitely and they can break your code
for (let i = 0; ; i++) {
    console.log(i);
}

^^ Wrong example

// We have no run condition, which means the loop doesn't end. Because we have nothing to check to see if it is true or false, your code breaks.


--

*/

// // loop that counts to -25 by -3, starting from positive 2, logs the numbers
// for (let i = 2; i >=-25; i = i -3){
//     console.log(i);
// } 

// display the letters of a name individually.
//  let name = "Kinkade";

//  for (let i = 0; i < name.length; i++){
//      console.log(name[i]);
//  }


// .length is a method. ^^

// In case it wasn't obvious, for loops can use a wide variety of variables, also like functions.

// let fName = ['Zack','Eric'];
let fName = 'Zack';
for(n of fName) {
    console.log(n);
}


let sample = {
    name: 'Zack',
    role: 'student'
}

for(s in sample) {
    console.log(s)
}
/*

// for - loops through a block of code a number of times
    valuable because we might want to cycle through different info, think of retail inventory
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object



//The For Loop Syntax

for (statement 1; statement 2; statement 3) {
    // code block to be executed
}

// Object- In Programming, an object is defined as a variable, structure, function, or a method referenced by an identifier.
// (Uh, point out an object just so I know for sure)

// Back to loops

// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while a specified condition is true

// The Do While Syntax

do {
    text += "Blah blah blah" + i;
    i++;
}
while (i < 10);

Fizz Buzz

for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz";)
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

Explanation: 
for (var i = 1; i < 101; i++) This means it is a 'for loop' that counts 'i' up to 100
if (i % 15 == 0) console.log("FizzBuzz"); This is an 'if' signifying that if the number is divisiable by 15, it will equal 'FizzBuzz'
else if (i % 3 == 0) console.log("Fizz";) If divisible only by three, then it will show 'Fizz'
else if (i % 5 == 0) console.log("Buzz"); If divisible only by five, it will show 'Buzz'



*/

// friend or family member who knows nothing of js and explain a function and a loop.