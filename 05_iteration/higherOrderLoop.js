// for of

["", "", ""]
[{}, {}, {}]


const arr = [1, 2, 3, 4 ,5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`); // we can also print directly
}


// Maps => Map is a object

const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("USA", "United States Of America")
// console.log(map);

// for (const key of map) {
//     console.log(key); // It gives Array
// }

for (const [key, Value] of map) {
    // console.log(key, ':-', Value); // It gives Array
}

const myObject = {
    'game1': 'NFS',
    'game2': 'spiderman'
}

for (const [key, Value] of myObject) {
    console.log(key, ':-', Value); // here object are not iterable
}