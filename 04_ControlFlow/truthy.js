const userEmail = "ranjeet@google.com"

if (userEmail) {
    console.log("Got user Email");
} else {
    console.log("Don't have user Email");
}


/* 
    falsy Value
    false, 0, -0, BigInt 0n, "", null, Undefined, NaN


    truthy Value
    "0", 'false', " ", [], {}, function(){}, 
*/

const userMail = []
if (userMail.length === 0) {
    console.log("Array is empty");
}


const emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

/*
false == 0  => true
false == '' => true
0 == ''     => true
*/



// Nullish Coalescing Operator (??) : null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20


// console.log(val1);






//  Terniary Operator
//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("Greater than 80");
