/* Hoisting 
    * All the variables and functions are allocated memory spaces before execution

*/



console.log(printInConsole); // [Function: printInConsole]
console.log(printInConsole()); // Printed in console


function printInConsole() {
    console.log('Printed in console');
}


console.log(arrowFunction); // undefined
console.log(arrowFunction()); //TypeError: arrowFunction is not a function

var arrowFunction = () => {
    console.log('Arrow Function');
}