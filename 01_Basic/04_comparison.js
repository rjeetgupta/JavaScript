// Compare same datatype

// console.log(2 > 1)
// console.log(2 >= 1)
// console.log(2 < 1)
// console.log(2 == 1)
// console.log(2 != 1)


// console.log("2" > 1); // compare same datatype. We don't have comparable result
// console.log("02" > 1); // compare same datatype

// console.log(null > 0);  // Avoid this type of conversion
//  console.log(null == 0);
//  console.log(null >= 0); // here null is converted into 0 first


// Notes : -
/* 

The reason is that an equality check
== and comparisions > < >= <= work differently
Comparision convert null to a number, 
treating it as 0. That's why(3) null >= 0 is true
and (1) null > 0 is false 

*/


// console.log(undefined > 0); // All are always false
// console.log(undefined == 0);
// console.log(undefined >= 0);

// ===  => It check value as well as datatype also

// console.log("2" === 2);


