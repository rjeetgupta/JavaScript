// singleton
// Object.create


// object literals


const mySym = Symbol("key1");


const JsUser = {
    name: "Ranjeet",
    "full name": "Ranjeet Kumar",
    [mySym]: "mykewy1",
    age: 21,
    location: "ranchi",
    email: "ranjeet@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Mondays", "Saturdays"]
} 

console.log(JsUser["full name"])





// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "ranjeet@microsoft.com"
// console.log(JsUser)

// Object.freeze(JsUser) // after freezing we can't update anything
JsUser.email = "ranjeet@gmail.com"
// console.log(JsUser)


JsUser.greeting = function () {
    console.log("Hellow JS User");
}


JsUser.greetingTwo = function () {
    console.log(`Hellow JS User, ${this.name}`); // jab same object ko call krna ho to this ka use kre
}


console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())