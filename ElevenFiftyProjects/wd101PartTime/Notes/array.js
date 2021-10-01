/*
ex:
    let array = [value, value, value];
index position:     0       1      2
*/

let arr = ['first value', 'second value', 'third value'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

// .length with an array:
console.log(arr.length);
console.log(arr.length - 1);

// Using an array constructor Below, new is the keyword
let test = new Array();
console.log(test)
console.log(test.length);

// Created an array w/ 3 empty items
let test2 = new Array(3);
console.log(test2);
console.log(test2.length);
// We target a specific index/key, we "assigned" it a proper value 
test2[0] = "New Value";
console.log(test2);

// Initializing an array values
let nums = Array (1, 2, 3, 4, 5);
console.log(nums);
console.log(typeof nums);
//console.log(typeof nums);

let array2 = Array('array1', 'array2', 'array3');
console.log(array2);
console.log(array2[2]);

// *****METHODS*****
// Methods are a way to pull out and/or manipulate the data within our arrays.

// forEach(), method runs a function over each index of our array
let boardGames = ['scrabble', 'chess', 'monopoly', 'DnD', 'Clue']
//                  0              1        2         3      4
for(i = 0; i < boardGames.length; i++) {
    console.log(boardGames[i]);
};

// Concise Body Arrow Function
boardGames.forEach(game => console.log(`Concise: ${game}`));
//boardGames.forEach(game => console.log(typeof game));

// Block Body Arrow Function
boardGames.forEach(game => {
    console.log(`Block: ${game}`);
});

// Anonymous Function
boardGames.forEach(function(game){
    console.log(`Anon: ${game}`);
})

// Various other methods:
// Array.length -> returns the number of elements in the array.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.length);

// Array.push() -> adds an element to the end of the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.push('mint');
console.log(shoppingList);

// Array.pop() -> removes the last element of the array and returns that element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.pop();
console.log(shoppingList);

// Array.unshift() -> adds a new element at the beginning of the array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.unshift('salt');
console.log(shoppingList);

// Array.shift() -> removes the first element in the array, and returns that element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.shift();
console.log(shoppingList);

// Array.map() -> transforms the elements in the original array by calling the given function once for each item.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.map(map => item.toUpperCase()));

// Array.filter() -> creates a new array with only the elements that pass the test in a given array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.filter(iten => item.startsWith(`l`)));

//Array.find() -> return the first element in the array that passes a test given as a function
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.find(item => item.startsWith('l')));

// Array.reduce() -> executes a given function for each value of the array and returns a single value
let costs = [2.00, 2.00, 4.00, 13.00]
console.log(costs.reduce(total, cost), total + cost);

// Array.includes() -> determines wether an array has a specific element
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.includes('limes'));
console.log(shoppingList.includes('salt'));

// Array.indexof() -> search the array for a specific element and returns it's first index.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.indexOf('limes'));
console.log(shoppinglist.indexOf('salt'));

// Array.findIndex() -> returns the index of the first element in an array that passes the test given in a function
//Returns -1 when element is not found
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.findIndex(item => item.startsWith('g')));

// Array.every() -> checks if all elements in an array pass a test given as a function. If there is 1 element that returns a false value, the function returns false and does not check the rest of the elements.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.every(item => item.length > 1));

// Array.concat() -> merge two or more arrays, and returns a new array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
let secondList = ['mint', 'salt', 'simple syrup'];
console.log(shoppingList.concat(secondList));

// Array.slice() -> selects a part of an array, and returns a new array. It selects the elements starting  at the provided start argument, and ends at, but does *not* include, the provided end argument.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.slice(1, 4));

// Array.splice() -> add/removes elements in an array and returns the new elements. first arguments takes in an integer that specifies at what index to add/remove elements. Second argument takes in the number of items to be removed. Optional third argument:  takes in the new elements to be added to the array.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
shoppingList.splice(2, 2);
console.log(shoppingList);

shoppingList.splice(2, 1, 'cherries');
console.log(shoppingList);

// Array.sort() -> sorts thw item in an array. the sort order can be either alphabetic or numeric,  and with ascending or descending. By default, sort() orders the values as strings in alphabetical and ascending order. Can take in a compare function which indicates if you want to sort by ascending or descending order.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.sort());

let costs = [3, 2, 13, 4];
//want to sort by descending
console.log(costs.sort((a, b) => b - a));
//By ascending order
console.log(costs.sort((a, b) => a-b));

//Array.reverse() -> reverse the order of elements in an array
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.reverse())
// reverse only requires logic, no in-parenthesis

// Array.toString() -> converts an array into a string
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.toString());

// Array.join() -> converts the elements of an array into a string. Can accept an optional parameter, "separator", which indicates hw the elements will be separated. Default separator is a comma.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(shoppingList.join("! and "));
console.log(shoppingList.join(" "));

// Lastly, an ES6 feature (the newest for mof JS): the spread operator. The spread operator is indicated by these three dots "..." expands the contents of the array and takes it out of the array structure.
let shoppingList = ['celery', 'limes', 'lemon', 'grenadine', 'oranges'];
console.log(...shoppingList);


