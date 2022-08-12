/**
 * ERRORS IN JAVASCRIPT
 */


/* ReferenceError
* Cannot find anywhere in the scope
*/

console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(x); // ReferenceError: x is not defined

let a = 24;

// -----------------x ------------x--------------x------------------x------------------x--------------------------x

/* SyntaxError
* Error with syntax of the code
*/

// SyntaxError: Identifier 'b' has already been declared 

let b = 23;
let b = 34;

//const 

const z; //SyntaxError: Missing initializer in const declaration
z=34;

// No error
var c = 23;
var c = 34; 

// -----------------x ------------x--------------x------------------x------------------x--------------------------x

/* TypeError
* cannot assign a value to const later
*/

const f = 23;
f = 34; // TypeError: Assignment to constant variable.