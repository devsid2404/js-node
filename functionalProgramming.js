/**
 * High Order Function ==>
 * A function which takes another function as argument ||
 * returns a function from it.
 */

function x(){
    console.log('Some message');
}

function y(x) { // y is a higher order function and x is a callback function
    x();
}




// Functional Coding


const radiusArray = [1,2, 3,4];

const area = (radius) => Math.PI * radius * radius;

const circumference = (radius) => 2 * Math.PI * radius;

const diameter = (radius) => 2 * radius;


const calculateOperation = (radiusArray, operationFunction) => {
    const output = [];
    for(let i =0; i< radiusArray.length; i++) {
        output.push(operationFunction(radiusArray[i]));
    }
    return output;
}

console.log('Result ===>', calculateOperation(radiusArray, diameter));
console.log('Result ===>', radiusArray.map(diameter)); // .map is a higher order function


console.log('MAP Result =>', [1, 5,7,8].map(element => element * 2)); // doubles each element


console.log('FILTER Result =>', [1, 5,7,8].filter(element => element % 2 === 0)); // even numbers


console.log('REDUCE Result =>', [1, 5,7,8].reduce((acc, curr) => acc = acc + curr)); // even numbers

 
