//  Immediately Invoked Function Expression (IIFE)
/* 
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
    
    
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )("hitesh")