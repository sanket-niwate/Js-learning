const name ="sanket"
const repoCount=50

console.log(name+repoCount+" value");

console.log(`hello my name is ${name}and my repo is ${repoCount}`);

const gameName = new String('sanket niwate')


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5) //output is sanke
console.log(newString);

const anotherString = gameName.slice(-1, 3) //support negative value
console.log(anotherString);

const newStringOne = "   sanket    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanket.com/sanket%20niwate"

console.log(url.replace('%20', '-'))

console.log(url.includes('sanket')) //if name exit then show output true otherwise false

console.log(gameName.split(' '));

const game = gameName.split('')
console.log(game[0]);


// Here are the most common string methods in JavaScript:

// length
// toUpperCase()
// toLowerCase()
// includes()
// indexOf()
// slice()
// substring()
// replace()
// trim()
// split()

// Here are the less common but useful string methods in JavaScript:

// concat()
// charAt()
// charCodeAt()
// endsWith()
// startsWith()
// repeat()
// padStart()
// padEnd()
// lastIndexOf()
// match()
// matchAll()
// search()
// toString()
// valueOf()
// localeCompare()

// String Methods in JavaScript

// 1. length
let str = "Hello World";
// Reason: `.length` gives the total number of characters, including spaces.
console.log("Length:", str.length); // Output: 11

// 2. toUpperCase()
// Reason: Converts all characters in the string to uppercase.
console.log("Uppercase:", str.toUpperCase()); // Output: "HELLO WORLD"

// 3. toLowerCase()
// Reason: Converts all characters in the string to lowercase.
console.log("Lowercase:", str.toLowerCase()); // Output: "hello world"

// 4. includes()
// Reason: Checks if the substring exists in the string. It is case-sensitive.
console.log("Includes 'World':", str.includes("World")); // Output: true
console.log("Includes 'world':", str.includes("world")); // Output: false

// 5. indexOf()
// Reason: Returns the position of the first occurrence of the substring. Returns -1 if not found.
console.log("Index of 'World':", str.indexOf("World")); // Output: 6
console.log("Index of 'world':", str.indexOf("world")); // Output: -1

// 6. slice(start, end)
// Reason: Extracts part of the string from start to end (end not included).
console.log("Slice (0, 5):", str.slice(0, 5)); // Output: "Hello"
console.log("Slice (6):", str.slice(6));      // Output: "World"

// 7. substring(start, end)
// Reason: Similar to slice, but doesn’t accept negative indices.
console.log("Substring (0, 5):", str.substring(0, 5)); // Output: "Hello"

// 8. replace()
// Reason: Replaces the first occurrence of the specified value with a new value.
let replacedStr = str.replace("World", "Everyone");
console.log("Replaced:", replacedStr); // Output: "Hello Everyone"

// 9. trim()
// Reason: Removes whitespace from both ends of the string.
let spacedStr = "   Hello World   ";
console.log("Trimmed:", spacedStr.trim()); // Output: "Hello World"

// 10. split(separator)
// Reason: Splits the string into an array of substrings using the separator.
let fruits = "apple,banana,cherry";
console.log("Split by ',':", fruits.split(",")); // Output: ["apple", "banana", "cherry"]

// 11. concat()
// Reason: Combines two or more strings into one.
let str1 = "Hello";
let str2 = "World";
console.log("Concatenated:", str1.concat(" ", str2)); // Output: "Hello World"

// 12. charAt()
// Reason: Returns the character at the specified index.
console.log("Character at index 1:", str.charAt(1)); // Output: "e"

// 13. charCodeAt()
// Reason: Returns the Unicode (ASCII) value of the character at the specified index.
console.log("Unicode of char at index 0:", str.charCodeAt(0)); // Output: 72 (for "H")

// 14. endsWith()
// Reason: Checks if the string ends with the specified substring. Returns true or false.
console.log("Ends with 'World':", str.endsWith("World")); // Output: true

// 15. startsWith()
// Reason: Checks if the string starts with the specified substring. Returns true or false.
console.log("Starts with 'Hello':", str.startsWith("Hello")); // Output: true

// Bonus Example: Using multiple methods together
let exampleStr = "   JavaScript is Awesome!   ";
let processedStr = exampleStr
    .trim()            // Reason: Removes spaces from both ends.
    .toLowerCase()     // Reason: Converts the string to lowercase.
    .replace("awesome", "cool"); // Reason: Replaces "awesome" with "cool".
console.log("Processed string:", processedStr); // Output: "javascript is cool"


//outputs
// 1. Length: 11
// 2. Uppercase: HELLO WORLD
// 3. Lowercase: hello world
// 4. Includes 'World': true
// 5. Includes 'world': false
// 6. Index of 'World': 6
// 7. Index of 'world': -1
// 8. Slice (0, 5): Hello
// 9. Slice (6): World
// 10. Substring (0, 5): Hello
// 11. Replaced: Hello Everyone
// 12. Trimmed: Hello World
// 13. Split by ',': [ 'apple', 'banana', 'cherry' ]
// 14. Concatenated: Hello World
// 15. Character at index 1: e
// 16. Unicode of char at index 0: 72
// 17. Ends with 'World': true
// 18. Starts with 'Hello': true
// 19. Processed string: javascript is cool

