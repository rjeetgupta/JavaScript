/*
        Variable
        1. var - var can be decleared many times as we want. In var there is a problem like 
        scope.

        2. let - let can be decleared at once and reassign the value once.

        3. const - const can be decleared at once then never changed and not reassign. 

*/






const accountId = 144553
let accountEmail = "ranjeet@gmail.com"
var accountPassword = "1234"
accountCity = "Ranchi"  // In Javascript we can declear without defining it's datatype.But it is not  recommended.
let accountState;    // Undefined because we didn't declear any value for it.

// accountId = 2 // not allowed, It can not be changed once it defined

accountEmail = "rg@gmail.com"
accountPassword = "12"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])