var x  = 14;
a();
b();
console.log(x); // 14  global execution context


function a() {
    var x = 24;
    console.log(x); // 24
}

function b() {
    var x = 34;
    console.log(x); // 34
}