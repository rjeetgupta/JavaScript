// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[0]);


// array methods

myArr.push(6) // add element in the last
// console.log(myArr);
myArr.push(7);
// console.log(myArr);

myArr.pop()  // delete element from last of the array


myArr.unshift(9);  // add element in the first

myArr.shift()  // delete element from the first

// console.log(myArr.includes(9)); // gives the result in boolean
// console.log(myArr.includes(3));

const newArr = myArr.join() // join and convert the array into string
// console.log(myArr);
// console.log(newArr);

// console.log(typeof newArr)
