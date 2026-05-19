var v = 10;
let l = 30;
const c = 3.14;

var browser = "chrome";
var browser = "firefox";// redeclertion allowed
browser = "edge"; // reassigment allowed


var testcases = ["login", "logout", "signup"];

for (var i = 0; i < testcases.length; i++) {
    console.log("Running test:", testcases[i]);

}
console.log("Loop counterleaked outside:", i);

console.log("Hi");
console.log("Hi");
console.log("Hi");

function say() {
    console.log("Hi from function");

}
say();
say();
