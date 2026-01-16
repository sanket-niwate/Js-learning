const name ="sanket"
const repoCount=50

console.log(name+repoCount+" value");//not a  good method to write code

console.log(`hello my name is ${name}and my repo is ${repoCount}`); //use backticks for better code readibility //it is string interpolation

const gameName = new String('sanket niwate')//we can access method // we can access key value pair


// console.log(gameName[0]);
// console.log(gameName.__proto__);

//length()
// console.log(gameName.length);

//toUpperCase()
// console.log(gameName.toUpperCase());

//charAt()
console.log(gameName.charAt(2));

//indexOf()
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 5) //output is sanke  //not support negative values
console.log(newString);

const anotherString = gameName.slice(-1, 3) //support negative value
console.log(anotherString);

//JavaScript provides trim variants that can handle specific cases of whitespace removal
//trim() //Removes whitespace from both ends.
//trimStart() //Removes whitespace only from the beginning of the string.
//trimEnd() //Removes whitespace only from the end of the string.
const newStringOne = "   sanket    "
console.log(newStringOne);
//1. trim()
console.log(newStringOne.trim()); 

// 2. trimStart() - Removes whitespace from the beginning.
console.log("Trim Start:", newStringOne.trimStart()); // Output: "Hello World   "

// 3. trimEnd() - Removes whitespace from the end.
console.log("Trim End:", newStringOne.trimEnd()); // Output: "   Hello World"

//replaces
const url = "https://sanket.com/sanket%20niwate"
console.log(url.replace('%20', '-'))

//includes()
console.log(url.includes('sanket')) //if name exit then show output true otherwise false

//split()
console.log(gameName.split(' '));

const game = gameName.split('')
console.log(game[0]);


// Here are the **most common string methods** in JavaScript:

// 1) length - Returns the number of characters in the string.
// 2) toUpperCase() - Converts all characters in the string to uppercase.
// 3) toLowerCase() - Converts all characters in the string to lowercase.
// 4) includes() - Checks if a substring exists in the string.
// 5) indexOf() - Returns the position of the first occurrence of a substring.
// 6) slice() - Extracts a section of the string, from start to end.
// 7) substring() - Similar to slice(), but doesn’t accept negative indices.
// 8) replace() - Replaces the first occurrence of a substring with a new value.
// 9) trim() - Removes whitespace from both ends of the string.
// 10) split() - Splits the string into an array of substrings using the separator.

// Here are the **less common but useful string methods** in JavaScript:

// 11) concat() - Joins two or more strings.
// 12) charAt() - Returns the character at the specified index.
// 13) charCodeAt() - Returns the Unicode of the character at the specified index.
// 14) endsWith() - Checks if the string ends with a specified substring.
// 15) startsWith() - Checks if the string starts with a specified substring.
// 16) repeat() - Repeats the string a specified number of times.
// 17) padStart() - Pads the string on the left side to reach the specified length.
// 18) padEnd() - Pads the string on the right side to reach the specified length.
// 19) lastIndexOf() - Returns the last position of a substring.
// 20) match() - Matches a regular expression against the string.
// 21) matchAll() - Returns all matches of a regular expression as an array.
// 22) search() - Searches the string for a match to the regular expression.
// 23) toString() - Returns the string representation of an object.
// 24) valueOf() - Returns the primitive value of a string object.
// 25) localeCompare() - Compares two strings based on local language settings.

// String Methods in JavaScript

// 1. length - Returns the number of characters in the string.
let str = "Hello World";
console.log("1. Length:", str.length); // Output: 11

// 2. toUpperCase() - Converts all characters in the string to uppercase.
console.log("2. Uppercase:", str.toUpperCase()); // Output: "HELLO WORLD"

// 3. toLowerCase() - Converts all characters in the string to lowercase.
console.log("3. Lowercase:", str.toLowerCase()); // Output: "hello world"

// 4. includes() - Checks if a substring exists in the string.
// inclues is case-sensitive
// if write 
// console.log(text.includes("world")); // false

console.log("4. Includes 'World':", str.includes("World")); // Output: true

// 5. indexOf() - Returns the position of the first occurrence of a substring.
// If it does not find the substring, it returns -1 to indicate that there is no match.
console.log("5. Index of 'World':", str.indexOf("World")); // Output: 6

// 6. slice() - Extracts a section of the string, from start to end.
/* The key difference is:
slice(): Accepts negative indices to count from the end of the string.
substring(): Does not accept negative indices; treats them as 0. */
console.log("6. Slice (0, 5):", str.slice(0, 5)); // Output: "Hello"

// 7. substring() - Similar to slice(), but doesn’t accept negative indices.
console.log("7. Substring (0, 5):", str.substring(0, 5)); // Output: "Hello"

// 8. replace() - Replaces the first occurrence of a substring with a new value.
//case-sensitive //replaceAll()
console.log("8. Replace 'World' with 'Everyone':", str.replace("World", "Everyone")); // Output: "Hello Everyone"

// 9. trim() - Removes whitespace from both ends of the string.
let spacedStr = "   Hello World   ";
console.log("9. Trimmed:", spacedStr.trim()); // Output: "Hello World"

// 10. split() - Splits the string into an array of substrings using the separator.
let fruits = "apple,banana,cherry";
console.log("10. Split by ',':", fruits.split(",")); // Output: ["apple", "banana", "cherry"]

// 11. concat() - Joins two or more strings.
let str1 = "Hello";
let str2 = "World";
console.log("11. Concatenated:", str1.concat(" ", str2)); // Output: "Hello World"

// 12. charAt() - Returns the character at the specified index.
console.log("12. Character at index 1:", str.charAt(1)); // Output: "e"

// 13. charCodeAt() - Returns the Unicode of the character at the specified index.
console.log("13. Unicode of char at index 0:", str.charCodeAt(0)); // Output: 72 (for "H")

// 14. endsWith() - Checks if the string ends with a specified substring.
console.log("14. Ends with 'World':", str.endsWith("World")); // Output: true

// 15. startsWith() - Checks if the string starts with a specified substring.
console.log("15. Starts with 'Hello':", str.startsWith("Hello")); // Output: true

// 16. repeat() - Repeats the string a specified number of times.
let repeatStr = "Hi ";
console.log("16. Repeated:", repeatStr.repeat(3)); // Output: "Hi Hi Hi "

// 17. padStart() - Pads the string on the left side to reach the specified length.
let padStr = "5";
console.log("17. Pad Start:", padStr.padStart(3, "0")); // Output: "005"

// 18. padEnd() - Pads the string on the right side to reach the specified length.
console.log("18. Pad End:", padStr.padEnd(3, "0")); // Output: "500"

// 19. lastIndexOf() - Returns the last position of a substring.
let sentence = "Hello World, Hello Again!";
console.log("19. Last index of 'Hello':", sentence.lastIndexOf("Hello")); // Output: 13

// 20. match() - Matches a regular expression against the string.
let matchStr = "The quick brown fox jumps over the lazy dog.";
console.log("20. Match 'fox':", matchStr.match(/fox/)); // Output: ["fox"]

// 21. matchAll() - Returns all matches of a regular expression as an array.
let matchAllStr = "test test test";
console.log("21. Match All 'test':", [...matchAllStr.matchAll(/test/g)]); 
// Output: [ [ 'test', index: 0 ], [ 'test', index: 5 ], [ 'test', index: 10 ] ]

// 22. search() - Searches the string for a match to the regular expression.
let searchStr = "The quick brown fox";
console.log("22. Search for 'fox':", searchStr.search("fox")); // Output: 16

// 23. toString() - Returns the string representation of an object.
let strObject = new String("Hello World");
console.log("23. To String:", strObject.toString()); // Output: "Hello World"

// 24. valueOf() - Returns the primitive value of a string object.
console.log("24. Value Of:", strObject.valueOf()); // Output: "Hello World"

// 25. localeCompare() - Compares two strings based on local language settings.
let compareStr1 = "apple";
let compareStr2 = "banana";
console.log("25. Locale Compare:", compareStr1.localeCompare(compareStr2)); 
// Output: -1 (since "apple" is lexicographically less than "banana")

//outputs
// 1. Length: 11
// 2. Uppercase: HELLO WORLD
// 3. Lowercase: hello world
// 4. Includes 'World': true
// 5. Index of 'World': 6
// 6. Slice (0, 5): Hello
// 7. Substring (0, 5): Hello
// 8. Replace 'World' with 'Everyone': Hello Everyone
// 9. Trimmed: Hello World
// 10. Split by ',': [ 'apple', 'banana', 'cherry' ]
// 11. Concatenated: Hello World
// 12. Character at index 1: e
// 13. Unicode of char at index 0: 72
// 14. Ends with 'World': true
// 15. Starts with 'Hello': true
// 16. Repeated: Hi Hi Hi 
// 17. Pad Start: 005
// 18. Pad End: 500
// 19. Last index of 'Hello': 13
// 20. Match 'fox': [ 'fox', index: 16, input: 'The quick brown fox jumps over the lazy dog.', groups: undefined ]
// 21. Match All 'test': [ [ 'test', index: 0 ], [ 'test', index: 5 ], [ 'test', index: 10 ] ]
// 22. Search for 'fox': 16
// 23. To String: Hello World
// 24. Value Of: Hello World
// 25. Locale Compare: -1


// Bonus Example: Using multiple methods together
let exampleStr = "   JavaScript is Awesome!   ";
let processedStr = exampleStr
    .trim()            // Reason: Removes spaces from both ends.
    .toLowerCase()     // Reason: Converts the string to lowercase.
    .replace("awesome", "cool"); // Reason: Replaces "awesome" with "cool".
console.log("Processed string:", processedStr); // Output: "javascript is cool"

//output
// 26. Unicode of char at index 0: 72
// 27. Ends with 'World': true
// 28. Starts with 'Hello': true
// 29. Processed string: javascript is cool

