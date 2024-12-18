const score=400
console.log(score)

const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length)

//toFixed()
//Formats a number to a specified number of decimal places.
console.log(balance.toFixed(2)); //output : 100.00

//toPrecision()
//Formats a number to a specified total number of significant digits.
const otherNumber= 123.5464
console.log(otherNumber.toPrecision(4)) //output :  123.5

/*toLocaleString() is a JavaScript method that converts a number or date into a string, 
formatted according to the specific locale's conventions, such as currency, decimal separators, and number grouping.
You can specify the locale and customize the formatting options.*/
const hundreds=1000000000
console.log(hundreds.toLocaleString('en-IN'))

//toExponential()
//Converts a number to exponential (scientific) notation.
let num = 12345;
console.log(num.toExponential(2)); // "1.23e+4"

//valueOf()
//Returns the primitive value of a number.
let num = new Number(42);
console.log(num.valueOf()); // 42

// Number.isInteger()
// Checks if a value is an integer.
console.log(Number.isInteger(4)); // true

// parseInt()
// Parses a string and returns an integer.
let str = "42px";
console.log(parseInt(str)); // 42

// parseFloat()
// Parses a string and returns a floating point number.
let str = "3.14abc";
console.log(parseFloat(str)); // 3.14

// isNaN()
// Checks if a value is NaN (Not-a-Number).
console.log(isNaN("text")); // true

//max value //min value 

//++++++++++++++++++++Maths+++++++++++

console.log(Math);

// Math.abs()
// Returns the absolute value of a number.
console.log(Math.abs(-4));//The Math.abs() static method returns the absolute value of a number.

// Math.round()
// Rounds a number to the nearest integer.
console.log(Math.round(4.6));

// Math.ceil()
// Rounds a number up to the nearest integer.
console.log(Math.ceil(4.1)) //The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

// Math.floor()
// Rounds a number down to the nearest integer.
console.log(Math.floor(4.9))//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

// Math.min()
// Returns the smallest of zero or more numbers.
console.log(Math.min(4,3,6,8));

// Math.max()
// Returns the largest of zero or more numbers.
console.log(Math.max(4,3,6,8));

// Math.random()
// Generates a random number between 0 (inclusive) and 1 (exclusive).
console.log(Math.random())//The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

console.log(Math.floor(Math.random()*10)+1);

const min=1
const max=6

console.log(Math.floor(Math.random()*(max-min+1))+min);



//Math extra method

// Math.pow()
// Returns the base raised to the exponent power.
  console.log(Math.pow(2, 3)); // 8 (2^3)

// Math.sqrt()
// Returns the square root of a number.
  console.log(Math.sqrt(16)); // 4

// Math.log()
// Returns the natural logarithm (base e) of a number.
  console.log(Math.log(10)); // 2.302585092994046

// Math.trunc()
// Removes the fractional part of a number, returning the integer part.
  console.log(Math.trunc(4.9)); // 4

// Math.sign()
// Returns the sign of a number (-1, 0, or 1).
console.log(Math.sign(-5)); // -1

// Math.imul()
// Performs 32-bit integer multiplication of two numbers.
console.log(Math.imul(2, 3)); // 6

// Math.cbrt()
// Returns the cube root of a number.
console.log(Math.cbrt(27)); // 3

// Math.acos()
// Returns the arccosine (inverse cosine) of a number.
console.log(Math.acos(0.5)); // 1.0471975511965979

// Math.asin()
// Returns the arcsine (inverse sine) of a number.
console.log(Math.asin(0.5)); // 0.5235987755982989

// Math.atan()
// Returns the arctangent (inverse tangent) of a number.
console.log(Math.atan(1)); // 0.7853981633974483

// Math.atan2()
// Returns the arctangent of the quotient of its arguments.
console.log(Math.atan2(1, 1)); // 0.7853981633974483

// Math.log10()
// Returns the base-10 logarithm of a number.
console.log(Math.log10(100)); // 2

// Math.log2()
// Returns the base-2 logarithm of a number.
console.log(Math.log2(8)); // 3

// Math.expm1()
// Returns exp(x) - 1, where exp(x) is Euler's number raised to the power of x.
console.log(Math.expm1(1)); // 1.718281828459045
