// setTimeout(() => console.log('this is a test of timeouts!'), 1000);

let Promise = new Promise (function(resolve, reject){
    setTimeout(() => {
        if (true){
            resolve('success');
        } else {
            reject('failure');
        }
    }, 3000);
})

Promise
.then(blah => console.log(blah)) //blah = success
.catch(err => console.log(err));

console.group('this code is after our promise & .then chain!');

function playfunc(){
    return 5;
}

console.log(playFunc());
