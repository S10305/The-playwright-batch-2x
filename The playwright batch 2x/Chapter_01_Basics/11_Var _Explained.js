var a = "10"; // Global Scope
// var is function scoped 
console.log(a); //  Global scope

function printHello() {
    console.log("Hello The Testing Academy");
    var a = (20); // Locaal scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); //30
    }


}
printHello();

//var is Dual facs, flipper,no trustworthy

