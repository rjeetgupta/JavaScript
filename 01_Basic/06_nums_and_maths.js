const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // always use 2

const anotherNumber = 123.8963
// console.log(anotherNumber.toPrecision(4)); // used for the digit where we want to keep the no

const hundred = 1000000
// console.log(hundred.toLocaleString()); // if, in US based value then use 'en-IN'



// ================== Maths  ===========================


// console.log(Math);
// console.log(Math.abs(-4)); // use for absolute value => convert negative to posite only
// console.log(Math.round(4.7)); // use for rounded value
// console.log(Math.ceil(4.4)); // use for high value i.e 5
// console.log(Math.floor(3.9)); // use for lowest value i.e 3

// console.log(Math.pow(25));
// sqrt() => used for square root of the number
// pow


// console.log(Math.min(4, 9, 6, 2, 5));
// console.log(Math.max(4, 9, 6, 2, 5));



// console.log(Math.random());
// console.log((Math.random() * 10) + 1);
// console.log(Math.floor(Math.random() * 10) + 1);

const min = 10
const max = 20


// It's a formula to find min and max value 
console.log(Math.floor(Math.random() * (max - min + 1)) + min);