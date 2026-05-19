// Single-line comment
let x = 5; // comment at end of line

/* Multi-line comment */
let y = 10;

/*
   Multi-line
   comment spanning
   multiple lines
*/
let z = 15;

// Nested multi-line comments /* are not allowed */ in JS

/**
 * JSDoc comment
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} sum
 */
function add(a, b) {
    return a + b;
}

// TODO: implement feature
// FIXME: fix this bug
// HACK: temporary solution
// NOTE: important information
// WARNING: be careful here

console.log("x:", x);
console.log("y:", y);
console.log("z:", z);
console.log("add(2, 3):", add(2, 3));
