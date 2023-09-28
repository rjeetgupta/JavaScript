const mavel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "Batman"]

// mavel_heros.push(dc_heros) //Here dc_heros push as a object
// console.log(mavel_heros);
// console.log(mavel_heros[3]); // [ 'superman', 'flash', 'Batman' ]

const allHeros = mavel_heros.concat(dc_heros)
// console.log(allHeros);

// another way and easy way to concatination in JS

const all_new_Heros = [...mavel_heros, ...dc_heros] // spread opertator i.e. ...Variable name, ...antoher variable name

// console.log(all_new_Heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, 10]]
const real_anotherl_array = another_array.flat(Infinity)
// console.log(real_anotherl_array);



// console.log(Array.isArray("Hitesh"));
// console.log(Array.from("Hitesh")); // from is used to convert in array
// console.log(Array.from({name: "Hitesh"})) // It gives empty array(Interesting Case)



const score1 = 100
const score2 = 200
const score3 = 300

// console.log(Array.of(score1, score2, score3)) // convert to array


// console.log(Array.from("Ranjeet"));


