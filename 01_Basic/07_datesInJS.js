// Dates

let myDate = new Date()
// console.log(myDate.toString()); // Fri Jun 16 2023 13:54:01 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  // Fri Jun 16 2023
// console.log(myDate.toLocaleDateString());  //16/6/2023
// console.log(myDate.toISOString); // [Function: toISOString]
// console.log(myDate.toJSON); // [Function: toJSON]
// console.log(myDate.getFullYear); // [Function: getFullYear]
// console.log(myDate.getHours); // [Function: getHours]


// console.log(typeof myDate);  // object


// let myCreatedDate = new Date(2023, 0, 14);  // 2023-01-13T18:30:00.000Z
// console.log(myCreatedDate.toDateString()); // Sat Jan 14 2023

// let myCreatedDate = new Date(2023 ,0, 14, 5, 3);
// console.log(myCreatedDate.toLocaleString())  //14/1/2023, 5:03:00 am


// let myCreatedDate = new Date(2023, 0, 14);
// console.log(myCreatedDate.toLocaleString())


let myCreatedDate = new Date("2023-01-14");
// console.log(myCreatedDate.toLocaleString());  // 14/1/2023, 5:30:00 am


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth() + 1);


newDate.toLocaleString('default', {
    weekday: "long"
})