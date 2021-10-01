
// to call them s variables, take out the quotes. See? The color changed

// Don't feel like you CAN'T look back, recipe book

// function name (x,y){
    //placeholders ^
// }
// return x + y 
// Zack would be equal to x and Kramer to y

// why would we be vague i.e. first and last name?
// We are saying first and last name because we need the USER to tell us.
// We want the results immediately
// Parameters can be WHATEVER, remember that
// When it highlights both, it targets both too
// When we say 'first name' we are also saying 'Zack'


// Come up with 2 or 3 authors I enjoy and create variables of each one
// Assign them a value with each book I own of them (four of one, four in that variable)
// write a function that adds them all together
// Then console log the total

// Invoking is the start button of our coffee maker
// Parameter is the beans
// Code just brews something like a maker


// const firstName = "Zack";
// const lastName = "Kramer";

// function fullName (first, last) {
//     return first + last;
// }

// fullName("Zack", "Kramer");

// console.log(fullName(firstName, lastName))








// The Authors

// let Hearne = 9;
// let King = 13;
// let Mercer = 3;

// // whenever noting a string, wrap in in a quote, integers don't need to be in quotes
// // 

// function authors(Po, Ta, To) {
//     console.log('Hearne' + 'King' + 'Mercer')
//     console.log(Po + Ta + To)
// }
// console.log(authors);
// authors(Hearne, King, Mercer);

// NaN: Not-a-number

// I am running it, what I'm saying is to put the strings together (line 55)

// Coffee Maker

//My idea was to return a function with parameters 'water' and 'beans' to equal 'coffee'

let tea = 'green';
let coffee = 'black';
let soda = 'coke';

function coffeeMaker(filter) {
     let drink = filter;

     // console.log(drink);

     if(drink === 'green') {
         console.log('Enjoy your tea.')
     } else if(drink === 'black') {
        console.log('Enjoy your coffee')
     } else {
         console.log('Not sure what kind of drink this is...');
     }

 }
coffeeMaker(tea)
coffeeMaker(coffee)
coffeeMaker(soda)

/* 
function nameOfFunction(parameter) {
    return(value);
}

nameOfFunction(argument) [invoking]
*/

// INVOKING
// Providing an argument

// Above is a prime example of JS running top to bottom if I need a reminder on what that actually looks like ^^

// Drink is filter. Filter is tea. Then tea is green.
// Drink is filter. Filter (a placeholder variable meaning it changes everytime we run it and we run it when we invoke it) is also coffee. Coffee is black.

// ^ we are console-ing here instead of return because we don't actually have a website.

// filter doesn't have quotes because we're calling a variable, not a string
// // My own- Goalkeeping saves
// INVOKING
// Providing an argument


// function goalSaves(inGoal, numberofSaves) {
//     let myPerformance = numberofSaves + inGoal;
//     return myPerformance
// }
// console.log(goalSaves(15, 9));






