"use strict";

// ============================================================
// COMPLETE JAVASCRIPT RESERVED KEYWORDS DEMONSTRATION
// One file showing (almost) all reserved keywords in action
// ============================================================

// ---- DECLARATIONS: var, let, const ----
var globalVar = "I am var-scoped";
let counter = 0;
const PI = 3.14159;
const MAX_RETRIES = 3;

// ---- DATA TYPES & LITERALS: true, false, null, typeof ----
let isActive = true;
let isClosed = false;
let emptyValue = null;
console.log("typeof PI:", typeof PI);        // "number"
console.log("typeof isActive:", typeof isActive); // "boolean"

// ---- FUNCTION ----
function greet(name) {
    // 'this' context depends on how function is called
    console.log("Hello, " + name);
    return "Greeted " + name;   // return
}

// ---- CLASS, extends, super, static, new ----
class Animal {
    constructor(species) {
        this.species = species;
    }
    
    speak() {
        console.log(this.species + " makes a sound");
    }
    
    static isLiving() {
        return true;   // true literal
    }
}

class Dog extends Animal {
    constructor(name) {
        super("Dog");   // super calls parent constructor
        this.name = name;
    }
    
    speak() {
        console.log(this.name + " barks!");
    }
}

let myDog = new Dog("Rex");
myDog.speak();
console.log("Is living?", Animal.isLiving());

// ---- if, else, else if ----
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else {
    console.log("Grade: C or below");
}

// ---- switch, case, default, break ----
let day = new Date().getDay();
switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// ---- for loop ----
console.log("\n--- FOR LOOP ---");
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;   // skip iteration 2
    }
    if (i === 4) {
        break;      // exit loop at 4
    }
    console.log("for i =", i);
}

// ---- while loop ----
console.log("\n--- WHILE LOOP ---");
let w = 0;
while (w < 3) {
    console.log("while w =", w);
    w++;
}

// ---- do...while loop ----
console.log("\n--- DO WHILE LOOP ---");
let d = 0;
do {
    console.log("do while d =", d);
    d++;
} while (d < 2);

// ---- in operator ----
let car = { make: "Toyota", model: "Camry" };
console.log("\n'make' in car:", "make" in car);   // true
console.log("'year' in car:", "year" in car);     // false

// ---- instanceof operator ----
console.log("myDog instanceof Dog:", myDog instanceof Dog);
console.log("myDog instanceof Animal:", myDog instanceof Animal);

// ---- void operator ----
console.log("void 0:", void 0);   // undefined

// ---- delete operator ----
let tempObj = { a: 1, b: 2 };
delete tempObj.a;
console.log("After delete:", tempObj);   // { b: 2 }

// ---- try, catch, finally, throw ----
console.log("\n--- ERROR HANDLING ---");
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero!");   // throw
    }
    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Caught error:", error.message);   // catch
} finally {
    console.log("Cleanup done!");   // finally - always runs
}

// ---- ASYNC / AWAIT ----
console.log("\n--- ASYNC / AWAIT ---");
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
    console.log("Fetching...");
    await delay(1000);   // await
    console.log("Data fetched after 1 second");
    return { id: 1, name: "Sample Data" };
}

// Call async function
fetchData().then(data => console.log("Result:", data));

// ---- GENERATOR FUNCTION (yield) ----
console.log("\n--- GENERATOR / YIELD ---");
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

let gen = numberGenerator();
console.log(gen.next().value);   // 1
console.log(gen.next().value);   // 2
console.log(gen.next().value);   // 3
console.log(gen.next().done);    // true

// ---- debugger (stops execution in DevTools) ----
// Uncomment below to test in browser DevTools:
// debugger;

// ---- with (discouraged but still a keyword) ----
// 'with' is deprecated in strict mode, so shown conceptually:
// with (console) { log("This uses with"); }

// ============================================================
// STRICT MODE RESERVED WORDS (cannot use as variable names):
// implements, interface, package, private, protected, public
// ============================================================

// These would cause SyntaxError if used as identifiers:
// let private = 5;     // ❌ Error in strict mode
// let package = {};    // ❌ Error in strict mode

console.log("\n=== ALL KEYWORDS DEMONSTRATED ===");
console.log("Check the source code to see each keyword in context!");

// ---- EXPORT (if this were a module) ----
// export { greet, Animal, Dog, divide, fetchData };
