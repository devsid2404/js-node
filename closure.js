/* CLOSURE
* Closure is a function that is bind together along with its lexical environment || scope.
* function + it's scope = closure

* Use of Closure
- Module Design Pattern
- Currying
- Call function once
- memoize
- setTimeouts
- Iterators
*/

function x() {
    var a = 24;
    function y(){
        console.log(a);
    }
    y(); 
    return y; // while returning the function y it also returns the lexical environment along with it i.e. a variable;
}

var z =  x();
z(); // 24





// Example for use of closure in Data Hiding and encapsulation
function counter() { // Here we are encapsulating the counter variable inside the function so it cannot be accessed from outside

    var count = 0; 

        return function incrementCounter() { // we can only increment counter because this this is returned;
            count++; 
        }
};

var counter1 = counter();
counter1(); // 1
counter1(); // 2

var counter2 = counter();
counter2(); // 1
counter2(); counter2(); // 3




// sample example with a constructor
function CounterConstructorFunction() { // Here we are encapsulating the counter variable inside the function so it cannot be accessed from outside

    var count = 0; 

        this.getCounterValue = () =>{
            return count;
        }

        this.incrementCounter = function () { // defining it in this which is the object created while we use the new keyword
            count++; 
            console.log(count);
        }

        this.decrementCounter = function () { // defining it in this which is the object created while we use the new keyword
            count--; 
            console.log(count);
        }
};

var counter3 = new CounterConstructorFunction();
counter3.incrementCounter(); // 1
counter3.decrementCounter(); // 0
console.log(counter3.decrementCounter()); // -1


/* Disadvantages of closure
    *  - Over consumption of memory
    *  - variables will not be garbage collected because of closure
    *  - Can cause memory leaks 
*/




