
console.log('START TIME =>', new Date().toTimeString());



setTimeout(() => {
    console.log('callback function =>', new Date().toTimeString()); // this will be printed in console last and not after 2s
}, 2000);                                                          // because call stack is blocked for 5s by the while loop below

const startTimeInMilliSeconds = new Date().getTime();
while(new Date().getTime() < startTimeInMilliSeconds + 5000){ // run the loop for 5 seconds
    // inside the loop
}


console.log('END TIME => ', new Date().toTimeString());
