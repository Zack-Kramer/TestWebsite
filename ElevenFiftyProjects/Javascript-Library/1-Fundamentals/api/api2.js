// // fetch('http://taco-randomizer.herkuapp.com/random/?full-taco-true')
// // .then(res => res.json())
// // .then(json => console.log(json))

// async function slowResult(){
//     await fetch('http://taco-randomizer.herkuapp.com/random/?full-taco-true')
//     .then(res => res.json())
//     .then(json => console.log(json))
//     console.log('thhis is a message!')
// }

// slowResult();

// // async returns a promise
// // await works withanything that returns a promise. Therefore await can go with just about anything.
// // await can only be used in conjunction with async
// // if the later code awaits on an earlier fetch rsult, then you should use async and await.

async function slowResult(){
    await fetch('http://taco-randomizer.herkuapp.com/random/?full-taco-true')
    .then(res => res.json())
    .then(json => {json.lolProperty = 'this is a random prop!'; return json;})
    console.log('thhis is a message!')
}

slowResult();