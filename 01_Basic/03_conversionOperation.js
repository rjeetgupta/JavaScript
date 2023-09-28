let score = "30abc"

// console.log(typeof score);
// console.log(typeof (score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => flase
// "hitesh" => true

let someNumber = 22

let stringNumber = String(someNumber)
// console.log(stringNumber)
// console.log(typeof stringNumber)


// **************** Operations *************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); ** use for power
// console.log(2/3);  for quotient
// console.log(2%3);  for remainder

let str1 = "hello"
let str2 = " hitesh"

let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 2) if starts from string then it convert all in string
// console.log(1 + 2 + "2") if starts from number then first cal. then treat as a string

// console.log((3 + 4) * 5 % 3);

console.log(true);
console.log(+true); // Not write this way
console.log(+""); // Not do this

let num1, num2, num3

num1 = num2 = num3 = 2 + 2   // Don't write this way, this is less readable

let gameCounter = 100
++gameCounter;
console.log(gameCounter);