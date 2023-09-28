const user = {
    username: "hitesh",
    price: 999,


    welcomeMessage: function () {
        // console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()

// console.log(this); // output => {}
// when we run on the browser it will show window object.



// function chai() {
//     let username = "hitesh"
//     console.log(this.username);          // here we are not getting use of this
// }
// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()



// const chai = () => {
//     let username = "hitesh"
//     console.log(this);       // here we can also not using this keyword
// }
// chai()



// ================ Arrow function ==========================

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 3));


// Implecit return  => we mean , don't need to write return
// this is only one line statement

// const addTwo = (num1, num2) => num1 + num2

// if we write in parenthesis then don't need to write return keyword
// if we write in curely braces then need to write return keyword
// const addTwo = (num1, num2) => (num1 + num2)



// if we want to return object then we need to write under the curly braces
const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo(4, 3));