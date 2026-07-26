# JavaScript Strings — Chapter 13 Cheatsheet

## 1. Creating Strings

```js
// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — support interpolation & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;

// Multiline strings
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;
```

## 2. String Conversion

```js
String(200);      // number → "200"
String(true);     // boolean → "true"
String(null);     // "null"
String([1, 2]);   // "[1,2]"

(200).toString();
true.toString();

// String → Number
Number("42");       // 42
parseInt("42px");   // 42 (parses until non-digit)
parseFloat("3.14"); // 3.14
```

## 3. Length & Character Access

```js
let str = "Hello, World!";
str.length;           // 13 — length starts at 1

str[0];               // "H"
str[7];               // "W"
str.at(-1);           // "!"  — negative indexes work from the end
str.at(-6);           // "W"

str.charAt(0);        // "H"
str.charCodeAt(0);    // 72 — Unicode value
```

## 4. Searching & Checking

```js
let url = "https://staging.vwo.com/api/login?retry=true";

url.includes("staging");      // true
url.includes("production");   // false

url.startsWith("https");      // true
url.endsWith("true");         // true

url.indexOf("a");             // 12 — first occurrence
url.lastIndexOf("a");         // 42 — last occurrence
url.indexOf("nothere");       // -1 — not found

url.search(/login/);          // 27 — regex search (returns index)
url.search(/vwo/);
```

## 5. Extracting Substrings

```js
let str = "Login_Test_Pass_001";

// slice(start, end) — supports negative indexes
str.slice(0, 5);     // "Login"  (0 to 4)
str.slice(11);       // "s_001"  (from 11 to end)
str.slice(-3);       // "001"    (last 3 chars)

// substring(start, end) — no negatives (treated as 0)
str.substring(6, 10); // "Test"
```

## 6. Transforming Strings

```js
let str = "  Hello, World!  ";

str.toUpperCase();       // "  HELLO, WORLD!  "
str.toLowerCase();       // "  hello, world!  "

str.trim();              // "Hello, World!"
str.trimStart();
str.trimEnd();
```

### Replace

```js
let msg = "Test: FAIL. Retry: FAIL.";

msg.replace("FAIL", "PASS");       // "Test: PASS. Retry: FAIL."  (first only)
msg.replaceAll("FAIL", "PASS");    // "Test: PASS. Retry: PASS."  (all)
msg.replace(/FAIL/g, "PASS");      // regex — global flag → all

// Replace all matches with regex
let url = "https://app.vwo.com?app=pramod";
url.replace(/app/g, "qa");         // "https://qa.vwo.com?qa=pramod"
```

### Split & Join

```js
"pass,fail,skip".split(",");       // ["pass", "fail", "skip"]
"test_login_pass".split("_");      // ["test", "login", "pass"]

["2024", "03", "07"].join("-");    // "2024-03-07"
"test_login_pass".split("_").join(" "); // "test login pass"
```

### Concatenation

```js
"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;
```

## 7. Common Regex Patterns

| Pattern   | Meaning                     |
|-----------|-----------------------------|
| `/login/` | Matches the literal "login" |
| `/g`      | Global flag — match all     |

> **Regex** = Regular Expressions — patterns for searching within strings.
