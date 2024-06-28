const user = {
    username: "Ranjeet",
    loginCount: 8,
    singedIn: true,

    getUserDetails: function() {
        // console.log("Got user details from Database");
        // console.log(this);
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function () {
        console.log(`Welcome ${this.username}`);
    }

    return this;
}

const userOne = new User("hitesh", 12, true);
const userTwo = new User("ChaiAurCode", 11, false);
console.log(userOne);
console.log(userTwo);

console.log(userOne.constructor);


/* 
    About new Keyword =>
    1. empty object is created i.e is called instance
    2. Constructor function is called due to new keyword it packs 
        all the argument and return
    3. Inject all argument and return 
    4. get all the details in the form of function
*/

// read InstanceOf