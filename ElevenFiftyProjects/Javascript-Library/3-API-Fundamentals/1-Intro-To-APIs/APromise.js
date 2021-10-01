// // // Boolean declaration or what a promise looks like
// // var amIGood = false;
// // // Promise, the Promise itself
// // var iCanHasGift = new Promise (
// //     function (resolve, reject) {
// //         if (amIGood) {
// //             var gift = {
// //                 brand: 'HasMattelbro',
// //                 item: 'Turbo-Man action figure'
// //             };
// //             resolve(gift); // fulfilled the promise
// //         } else {
// //             var naughty = "You've made Santa's naughty list; enjoy your coal!";
// //         }
// //     }
// // )

// // Call for the promise or consuming a promise
// var checkTwice = function () {
//     iCanHasGift
//     .then(function (fulfilled) {
//     // nice list = gift
//     console.log(fulfilled);
//     //output { brand: 'HasMattelBro', item: 'Turbo-man action figure'}
//     })
//     .catch(function (error) {
//         // naughty list = coal
//         console.log(error);
//         // output: "You've made Santa's naughty list; enjoy your coal!"
//     });
// };

// checkTwice();

//End example


//2nd promise
 var playDate = function (gift) {
     return new Promise(
         function (resolve, reject) {
             var message = "lorem " + gift.brand + ' ' + gift.item + '?';

             resolve(message);
         }
     );
 };

//since reject isn't called, we find that it is optional
// we refactor the previous example using Promise.resolve

var playDate = function (gift) {
    var message = "lorem " + gift.brand + '' + gift.item + '?';

    return Promise.resolve(message);
}

// Now that we have a second promise, chain them together.
// Note: You can only start the playDate promise AFTER the iCanHasGift promise.

var checkTwice = function () {
    iCanHasGift
    .then(playDate) // chain is here
    .then(function (fulfilled) {
        console.log(fulfilled);
        // output
        })
        .catch(function (error) {
            // output: lump of coal
            console.log(error)
            //output: naughty list
        });
};

checkTwice();