// Objects notes:
/*
Objects are JS data type that hold key and value pairs of data.
Objects can hold numbers, strings, booleans, arrays, and other objects, etc.
*/
// curly brackets denote object, objects REQUIRE two main attributes: *key and *value
let Netflix = {
    id: 1,
    name: 'The Office',
    isRunning: false,
    season1: {
        seasonInfo: {
            episodeInfo: [{
                episode: 1,
                episodeName: 'Pilot'
            },
            {
                episode: 2,
                episodeName: 'Diversity Day'                
            },
            {
                episode: 3,
                episodeName: 'Health Care'
            },
            {
                episode: 4,
                episodeName: 'The Alliance'
            },
            {
                episode: 5,
                episodeName: 'Basketball'
            }]
        }
    },
    season2: {},
    season3: {},
};

// Use dot and bracket notation to console.log episodeName of season one episode two

// console.log(Netflix.season1.seasonInfo.episodeInfo[1].episodeName);
// console.log(Netflix.season1.seasonInfo.episodeInfo.indexOf(ep => ep.startsWith(1)));

// *JSON Object
/*
-JSON stands for Java Script Object Notation
- derived from JSON syntax, JSON format is text only.
-Meaning it exists as a string. 
    -Useful when fetching data from a server(back-end application or logic).
    - Needs to be converted to a native JS object if we want to access the data.
*/

// Bracket Notation / Property Accessors
// Property Accessors: dot notation  . , *yep just a period* bracket notation []

let superHero = {};

// Target object as a whole w/ bracket notation, inject/give a key which is a string.
superHero['name'] = 'Spider-Man';
// Assigning a second key and value
superHero['alterEgo'] = 'Peter Parker';

console.log(superHero);
console.log(superHero['name'], superHero['alterEgo']);
console.log(superHero.name);

// All keys in objects are strings

let test = Object.keys(superHero);
console.log(test);
//test is holding something
console.log (typeof test [0]);

let spacedObject = {
    "Spaces Here": true,
    noSpaces: true
}
// Square brackets is good when we may not be able to use dot notation, BUT it is not common. It is one of those can versus should. 
console.log(spacedObject.noSpaces);
console.log(spacedObject["Spaces Here"]);