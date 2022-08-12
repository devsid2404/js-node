/* EXECUTION Context 
    * Js code runs in a execution context which consists of memory allocation phase and code execution phase
    * when a new program is run it runs in  GLOBAL Execution context
    * For each function invocation a new execution context is created inside a existing execution context
*/



//console.log('a =>', a); // ReferenceError: a is not defined

console.log('number =>', number); // undefined => if number variable was let you would get the same ReferenceError: number is not defined
var number = 24;

console.log('number =>', number); // 24

function square (givenNumber) {
    console.log('answer =>', answer); // undefined
    var answer = givenNumber * givenNumber;
    console.log('answer =>', answer); // givenNumber * givenNumber
    return answer;
}


let squaredResult = square(number);
let squaredResultOf4 = square(4);




/* Call stack || Runtime-stack || Control stack || Execution Context stack
    * used to manage the execution context
    * it consists of the stack of each execution context while function invocation 
    * its works as if in LIFO order
    * when a new function is invoked a new context is pushed in to the stack
    * and the function execution completes it is popped out of the stack
    * 
*/ 
