/**
 * BLOCK SCOPE
 */
{
    // Block
    // Compound Statement
    // used to combine a multiple statements together
}

var a = 13;
{
    var a = 23; // 23 is shadowed from the upper value
    let b = 33;
    const c = 44;
    // let & const are block scoped 
    // var is defined in the global scope
}

console.log(a); // 13
console.log(b); // ReferenceError: b is not defined
console.log(c); // ReferenceError: c is not defined



// Illegal shadowing 
let z = 12;
{
    var z  = 23; // SyntaxError: Identifier 'z' has already been declared 
}


// Valid shadowing
var d = 12;
{
    let d  = 23; // no error
}