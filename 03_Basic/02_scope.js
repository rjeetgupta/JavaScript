// Global Scope
// Local Scope

var c = 300
let a = 335
if (true) {
    let a = 20;
    const b = 30;
    // console.log("INNENR : ", a);
}
// console.log(a);
// console.log(b);
// console.log(c);




function one() {
    const username = "hitesh"

    function two() {
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website); // it will not access due to local scope

    // two()
}
// one()





if (true) {
    const username = "hitesh"

    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }

    // console.log(website);  // it can't be accessed due to local scope
}

// console.log(username); // It will also cant be accessed







// ========================== Interesting =======================

/*
function addOne(num) {
    return num + 1
}

addOne(5)

const addTwo = function (num) {
    return num + 2
}

addTwo(7)

*/




// Hoisting in javascript

console.log(addOne(5));
function addOne(num) {
    return num + 1
}


console.log(addTwo(7));

const addTwo = function (num) {
    return num + 2
}
