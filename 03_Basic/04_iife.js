//  Immediately Invoked Function Expression (IIFE)
/* 
    => Why use IIFE
    we use this because of sometimes global variable poluted
    to save them we use IIFE. 
    => In IIFE we need to stop the function . So use semicolon
*/

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();


// (function chaiAurCode() {
//     console.log(`DB CONNECTED TWO`);
// } )()


// ( () => {
    // Unamed IIFE
//     console.log(`DB CONNECTED TWO`);
// })()
    
  // Here we pass the parameters name and at the end of the function we give the values  
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("hitesh")