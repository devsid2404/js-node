

function x() {
    let d = 23;
    setTimeout(function(){
        console.log('inside a setTimeout');
    }, 3000);

    console.log('i am here');
}

x();


 
// ---------------X-x-x-x-x-----------------------------------
//print the second after each second

function forAndSetTimeout(){

    for(var i = 0; i <= 5; i++) {
        setTimeout(function() {
            console.log(i);
        },  i * 1000);
    }

    console.log('End of Function');
}
forAndSetTimeout(); // output => 6 6 6 6 6 6  
// since i is a var and not block scoped
// change i var with let solves the problem // output => 0 1 2 3 4 5    


// same problem solved with var keyword
function forAndSetTimeout(){

    for(var i = 0; i <= 5; i++) {

        function closure(newVariable) {
            setTimeout(function() {
                console.log(newVariable);
            },  newVariable * 1000);
        }

        closure(i);
    }

    console.log('End of Function');
}
forAndSetTimeout(); // output => 0 1 2 3 4 5    
// Because we are creating a closure of the function for each iteration