/*
Parameters are values we haven't assigned yet.
Value is past throough to the function using an argument(s).

ex:
    function nameFunc(parameter) {
        return....
    }

    nameFunc(argument);
*/


// Paramteter naming should reflect the desired data
function myName(Zack) {
    console.log(`My name is $(name)`);
}

myName("Zack");

function coffeepot(filter) {
    console.log(`I brewed some $(filter).`);
}

coffeepot("Dark roast");
coffeepot("Medium roast");
coffeepot("Light roast");
coffeepot("tea instead");

//Known as a function reference

let kettle = coffeepot;
// Undefined until passed the rgument for coffeepot
kettle("Green tea");

// Undefined is always the default value in JS

// Arguments get passed in order of position.
function dinner(main, side, drink) {
    console.log(`For dinner, I had ${main} and ${side}. To wash it down I had ${drink}.`);
}

dinner("potatoes", "steak", "coke");

// Return:
// Variable is used to capture the returned value
// return is the keyword "waiting"to capture it/waits for the value

function calc(one, two, three){
    // start by declaring our new variable & whatever it is(calcuation/value)
    let total = one + two + three;
    let average = Math.round(total / 3);
    return average;
}

// calc(15, 60, 55); <--no way to see return
let avgWeight = calc(15, 60, 55);
console.log(`The amount of rice I bought is ${avgWeight} lbs.`);