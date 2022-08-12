

//*=>  Function Statement or Function Declaration

 function a() { // Hoisted before executing
     console.log('a called'); 
 }

//*=>  Function Expression

var b = function () { // not hoisted before executing only b variable is hoisted 
    console.log('b called'); 
}

/**
 * //*=> Anonymous Function
 */

// function () { // cannot be used as function statement, can be used as  Function Expression

// }

//*=> Named Function Expression

var c = function namedFunction() { // can give named function as a expression to a variable
    console.log('namedFunction called'); 
}
// namedFunction();  cannot call this


//*=> Params vs Arguments

function parameters(z, x) {  // z & x are parameters
    console.log(z, x); 
}

parameters('z', 'x'); // 'z' & 'x' are arguments

//*=> First Class functions 

parameters(function(){}); //The ability to use functions as values and passed as arguments to another functions & returned out of a function is
                          // called a First Class functions . Program concept in many other languages
function returnFunctions() {
    return function (){

    }
}

//*=> Arrow functions

let arrowFunction = (f) => {
    console.log(f);
}





