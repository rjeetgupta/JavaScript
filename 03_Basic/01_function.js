function sayMyName() {
    console.log("H")
    console.log("I")
    console.log("T")
    console.log("E")
    console.log("S")
    console.log("H")
}
// sayMyName()

// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

// addTwoNumber(2, 5)
// addTwoNumber(3, null)


// function addTwoNumber(number1, number2) {
//     console.log(number1 + number2);
// }

// const result = addTwoNumber(4, 5)
// console.log("Result: ", result);



function addTwoNumber(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}
// const result = addTwoNumber(4, 6)
// console.log("Result: ", result);




function userLoginMessage(username) {
    return `${username} just logged in`
}
// console.log(userLoginMessage("Hitesh"));
// console.log(userLoginMessage()); //if not passed any value => undefined just logged in


function userLoginMessage(username) {
    if (username === undefined) {  // if(!username)
        // console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage());



function userLoginMessage(username = "Sam") {
    if(!username) { 
        // console.log("Please enter your username");
        return
    }
    return `${username} just logged in`
}
// console.log(userLoginMessage("Hitesh"));





function calculateCartPrice(...num1) { // here ... is rest operator just like spread operator
    return num1
}
// console.log(calculateCartPrice(200, 500, 564));



function calculateCartPrice(val1, val2, ...num1) { // here ... is rest operator just like spread operator
    return num1
}
// console.log(calculateCartPrice(200, 500, 564, 234));


const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

handleObject({
    username: "Sam",
    price: 399
})


const mynewArray = [200, 400, 500, 650]

function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(mynewArray));