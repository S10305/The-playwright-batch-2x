# JavaScript String Cheatsheet

## Creating Strings

```js
let s1 = 'Single quotes';
let s2 = "Double quotes";
let s3 = `Template literal (backtick)`;
let s4 = String(123);       // "123"
let s5 = new String("obj"); // Avoid
```

## Template Literals (Backticks)

```js
let name = "John";
let msg = `Hello ${name}!`;        // "Hello John!"
let multi = `Line 1
Line 2`;                            // Multi-line string
let expr = `2 + 2 = ${2 + 2}`;     // "2 + 2 = 4"
```

## Escape Sequences

| Sequence | Output |
|----------|--------|
| `\'`     | Single quote |
| `\"`     | Double quote |
| `\\`     | Backslash |
| `\n`     | New line |
| `\t`     | Tab |
| `\r`     | Carriage return |
| `\`      | Line continuation |

```js
let esc = "She said \"Hi\"";
```

## Length

```js
"hello".length;       // 5
"".length;            // 0
"  ".length;          // 2
```

## Access Characters

```js
"hello"[0];           // "h"
"hello"[4];           // "o"
"hello"[-1];          // undefined
"hello".charAt(0);    // "h"
"hello".charCodeAt(0);// 104 (Unicode value)
```

## Case Conversion

```js
"Hello".toUpperCase();    // "HELLO"
"Hello".toLowerCase();    // "hello"
```

## Search & Check

```js
"hello".indexOf("l");     // 2 (first index, -1 if not found)
"hello".lastIndexOf("l"); // 3
"hello".includes("ell");  // true
"hello".startsWith("he"); // true
"hello".endsWith("lo");   // true
"hello".search(/l/);      // 2 (regex)
```

## Extract Substrings

```js
"hello".slice(1, 4);      // "ell" (start, end - exclusive)
"hello".slice(1);         // "ello" (to end)
"hello".slice(-2);        // "lo" (negative = from end)
"hello".substring(1, 4);  // "ell" (no negatives)
"hello".substr(1, 3);     // "ell" (start, length) - legacy
```

## Split & Join

```js
"a,b,c".split(",");       // ["a", "b", "c"]
"abc".split("");          // ["a", "b", "c"]
"a b c".split(/\s+/);     // ["a", "b", "c"] (regex)
["a", "b"].join(",");     // "a,b"
["a", "b"].join("");      // "ab"
```

## Trim

```js
"  hi  ".trim();          // "hi"
"  hi  ".trimStart();     // "hi  "
"  hi  ".trimEnd();       // "  hi"
```

## Pad

```js
"5".padStart(3, "0");     // "005"
"5".padEnd(3, "0");       // "500"
"hi".padStart(5, "xy");   // "xyxhi"
```

## Repeat

```js
"ha".repeat(3);           // "hahaha"
```

## Replace

```js
"hello world".replace("world", "JS");    // "hello JS" (first match)
"hello world".replace(/o/g, "0");        // "hell0 w0rld" (all matches)
"hello world".replaceAll("l", "L");      // "heLLo worLd"
```

## Character Codes

```js
"A".charCodeAt(0);        // 65
String.fromCharCode(65);  // "A"
```

## Concatenation

```js
"a" + "b";                // "ab"
"a".concat("b", "c");     // "abc"
```

## Number <-> String

```js
String(123);              // "123"
(123).toString();         // "123"
(123).toString(16);       // "7b" (hex)
Number("123");            // 123
+"123";                   // 123
parseInt("123");          // 123
parseFloat("12.34");      // 12.34
```

## Comparison

```js
"a" < "b";                // true (lexicographic)
"apple" === "apple";      // true (strict equality)
"a".localeCompare("b");   // -1 (negative = less)
"b".localeCompare("a");   // 1 (positive = greater)
```

## Regex Methods

```js
"hello123".match(/\d+/);  // ["123"]
"hello123".match(/\d/g);  // ["1","2","3"]
"Hello".match(/[A-Z]/g);  // ["H"]
"hello".test(/h/);        // error - test is on regex
/h/.test("hello");        // true
```

## Useful Patterns

```js
// Check if empty/blank
str.length === 0;
str.trim().length === 0;

// Count occurrences
("abcabc".match(/a/g) || []).length; // 2

// Reverse string
"hello".split("").reverse().join(""); // "olleh"

// First char uppercase
"john".charAt(0).toUpperCase() + "john".slice(1); // "John"

// Check palindrome
str === str.split("").reverse().join("");
```
