scopeCheck(); // this function call will print undefined since x was not given a value in global context


function scopeCheck() {
    console.log('x=>',x);
    nestedFunction();
    function nestedFunction() {
        console.log('x=>',x);
    }
}


var x = 24;  //defined in global scope 

scopeCheck(); // this function call will print 24 since x was given a value in global context



/* SCOPE-CHAIN
* when a new excution context is created a lexicalEnv is created
* lexicalEnv = localMenory + lexicalEnv of parent;
*/