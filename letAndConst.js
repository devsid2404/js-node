
console.log(a); // Undefined
console.log(b); // ReferenceError: Cannot access 'b' before initialization

var a = 24;
let b = 30;



/* Hoisting of let & const
* let & const are also hoisted 
* but they are in the differnt memory space which cannot be accessed before it is defined
* TDZ (Temporal Dead zone) => time between the let and const are hoisted and are defined a value.
/*/ 
