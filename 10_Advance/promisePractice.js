// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Db connected");
//         resolve();
//     }, 2000)
// }).then(function () {
//     console.log("DB connected again");
// })

// const PromiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task is completed");
//         resolve();
//     }, 3000)
// })
// PromiseOne.then(function () {
//     console.log("DB is connected sucessfully");
// })

// const PromiseThree = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve({user: "Ranjeet", email: "example@gmail.com"})
//     }, 2000);
// })
// PromiseThree.then(function (user) {
//     console.log(user);
// })

// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         let error = true;
//         if (!error) {
//             resolve({username: "Ranjeet", password: "ranjeet@321"})
//         } else {
//             reject("Something went wrong");
//         }
//     }, 1000);
// }).then(function (user) {
//     console.log(user.username);
//     return user.username;
// }).then(function (username) {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(function () {
//     console.log("The Promise is either resolved or rejected");
// })



// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("The Promise is resolved");
//         resolve();
//     }, 1000)
// })
//     .then(function () {
//     console.log("The Promise is resolved again");
// })


// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("The Promise is resolved");
//         resolve();
//     }, 1000)
// })
//     .then(function () {
//         setTimeout(function () {
//             console.log("The Promise is resolved again");
//         }, 2000)
// })


// const promiseOne = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Promise is called");
//         resolve();
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log("Promise is resolved")
// })

// promiseOne.catch(function (err) {
//     console.log(err)
// })



fetch('https://api.github.com/users/rjeetgupta')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })
