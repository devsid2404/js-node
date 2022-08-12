/**
 * CALLBACK
 * 
 * Functions can be passed as arguments in a function call
 */

setTimeout(() => {
    console.log('timer');
}, 5000);


function example(y){
    console.log('inside example function');
    y();
}

example(function y() {
    console.log('inside y callback function');
}); // y is a callback function

 
// callback with closure
function getCounter() {
    let count = 0;
    return function () {
        ++count;
        console.log('Count=> ', count);
    }
}

// different instance, like initiating a class
getCounter()(); // 1
getCounter()(); // 1


// same instance
const counter = getCounter();
counter(); // 1
counter(); // 2




