//   Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 2342342423423423423n


// is Javascript static type or Dynamic type lauguage


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Ranjeet".
    age = 21,
}

const myFunction = function () {
    // console.log("Hellow world");
}


console.log( 1 + 2 + "3" + 4)


// =========================================================

// Stack (Primitive) => Copy


// Heap (Non Primitive) => Referece of Original value

let myYoutubename = "hiteshchaudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename);
// console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

// console.log(userOne.email)
// console.log(userTwo.email)
