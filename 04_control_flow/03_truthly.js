// Truthy
// In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.
// JavaScript uses type coercion in Boolean contexts.

// Examples of truthy values in JavaScript (which will be coerced to true in boolean contexts, and thus execute the if block):

// JS
// Copy to Clipboard
// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)

//The logical AND operator, &&
// If the first operand is truthy, the logical AND operator returns the second operand:

// JS
// Copy to Clipboard
// true && "dog"
// // returns "dog"

// [] && "dog"
// // returns "dog"




// Falsy
// A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

// JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.

// The following table provides a complete list of JavaScript falsy values:

// Value	Type	Description
// null	Null	The keyword null — the absence of any value.
// undefined	Undefined	undefined — the primitive value.
// false	Boolean	The keyword false.
// NaN	Number	NaN — not a number.
// 0	Number	The Number zero, also including 0.0, 0x0, etc.
// -0	Number	The Number negative zero, also including -0.0, -0x0, etc.
// 0n	BigInt	The BigInt zero, also including 0x0n, etc. Note that there is no BigInt negative zero — the negation of 0n is 0n.
// ""	String	Empty string value, also including '' and ``.
// document.all	Object	The only falsy object in JavaScript is the built-in document.all.

//Examples
// Examples of falsy values in JavaScript (which are coerced to false in Boolean contexts, and thus bypass the if block):

// JS
// Copy to Clipboard
// if (false) {
//   // Not reachable
// }

// if (null) {
//   // Not reachable
// }

// if (undefined) {
//   // Not reachable
// }

// if (0) {
//   // Not reachable
// }

// if (-0) {
//   // Not reachable
// }

// if (0n) {
//   // Not reachable
// }

// if (NaN) {
//   // Not reachable
// }

// if ("") {
//   // Not reachable
// }
// The logical AND operator, &&
// If the first object is falsy, it returns that object:

// JS
// Copy to Clipboard
// console.log(false && "dog");
// // ↪ false

// console.log(0 && "dog");
// // ↪ 0


const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}




// false ==0
// true //output
// false == ""
// true //output
// 0==""
// true //output


//Nullish coalescing operator (??)
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")