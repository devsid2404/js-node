/**
 * Event Listeners in Node
*/

const events = require('events'); 
// events.defaultMaxListeners = 2; => Can define max listeners for an event
const eventEmitter = new events.EventEmitter();

console.log('--------x----Assign the event handler to an event:--------x-----------x');

//Assign the event handler to an event:
eventEmitter.on('scream', (message) => {       //  event, callback function
    console.log('Scream event is called', message);
});

const addListenerCallback = (message) => {
    console.log('added through add listener', message);
}
eventEmitter.addListener('scream', addListenerCallback);

eventEmitter.once('scream', (message) => {       //  fires at most once for a particular event and will be removed from listeners array after it has listened once
    console.log('will scream only once', message);
});


// Trigger EVENT =>
console.log('--------x----Calling the event--------x-----------x');

//Fire the 'scream' event:
eventEmitter.emit('scream', '1ST TIME');
/* OUTPUT =>   
Scream event is called 1ST TIME
added through add listener 1ST TIME
will scream only once 1ST TIME
*/

eventEmitter.emit('scream', '2ND TIME');
/* OUTPUT =>   
Scream event is called 2ND TIME
added through add listener 2ND TIME
*/



/* Garbage Collection & remove Event listeners 
    * Event listeners are heavy and takes up memory space
    * Remove when not using, so that garbage collector remove the variables used in event listeners
*/

console.log('--------x----Removing listeners--------x-----------x');
eventEmitter.removeListener('scream', addListenerCallback);
eventEmitter.emit('scream', '3rd TIME');
/* OUTPUT =>   
Scream event is called 3rd TIME
*/

eventEmitter.removeAllListeners('scream');
eventEmitter.emit('scream', '4th TIME');
/* OUTPUT =>   

*/


/* Number of listeners to event
    * Default is 10
    * events.defaultMaxListeners = 2; // can change using
*/

console.log('--------x----SET no. of listeners--------x-----------x');

console.log('Number of max LISTENERS set => ', eventEmitter.getMaxListeners()); // Number of LISTENERS=>  10
eventEmitter.setMaxListeners(1);
console.log('Number of max LISTENERS set => ', eventEmitter.getMaxListeners()); // Number of LISTENERS=>  2

console.log('Number of listeners for scream =>', eventEmitter.listeners('scream')); // []
console.log('Number of listeners count for scream =>', eventEmitter.listenerCount('scream')); // 0


for(let i = 0; i<2; i ++) {
    console.log(`Adding ${i+1} listener to scream`);
    eventEmitter.on('scream', (message) => {      
        console.log(`listener added`, message);
    });
    console.log('Number of listeners for scream =>', eventEmitter.listeners('scream')); 
    console.log('Number of listeners count for scream =>', eventEmitter.listenerCount('scream')); 
} // (node:10738) MaxListenersExceededWarning: Possible EventEmitter memory leak detected. 2 scream listeners added to [EventEmitter]. Use emitter.setMaxListeners() to increase limit
//(Use `node --trace-warnings ...` to show where the warning was created)




