 


console.log('this ==>', this);
/* Output =>    
        Browser => global window Object
        Node => {} => since this refers to module.exports of this file.
            Need to get the global to fetch the global Object in node as shown below.
*/


console.log('global ==>', global);  // OR =>  console.log(globalThis);
/* OUTPUT => 
    Browser => global window Object
    Node  => Global object  ==> <ref *1> Object [global] {
        global: [Circular *1],
        clearInterval: [Function: clearInterval],
        clearTimeout: [Function: clearTimeout],
        setInterval: [Function: setInterval],
        setTimeout: [Function: setTimeout] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
        },
        queueMicrotask: [Function: queueMicrotask],
        performance: Performance {
            nodeTiming: PerformanceNodeTiming {
            name: 'node',
            entryType: 'node',
            startTime: 0,
            duration: 26.15008294582367,
            nodeStart: 1.103458046913147,
            v8Start: 1.6911669969558716,
            bootstrapComplete: 19.71079194545746,
            environment: 11.960291981697083,
            loopStart: -1,
            loopExit: -1,
            idleTime: 0
            },
            timeOrigin: 1650009360303.448
        },
        clearImmediate: [Function: clearImmediate],
        setImmediate: [Function: setImmediate] {
            [Symbol(nodejs.util.promisify.custom)]: [Getter]
            }
        }
*/