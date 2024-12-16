// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); //output => false
console.log(null == 0); //output => false
console.log(null >= 0); //output  => true

console.log(undefined == 0); //output => false
console.log(undefined > 0); //output => false
console.log(undefined < 0); //output => false

/*1. undefined == 0
Explanation:
The == operator performs loose equality, which allows type coercion. However:
undefined is only loosely equal to null (undefined == null is true).
undefined is not equal to any other value, such as numbers, strings, or booleans.
Since 0 is a number, no coercion makes undefined equal to it.
Result: false.

2. undefined > 0
Explanation:
When performing a relational comparison (>), JavaScript converts undefined to NaN (Not-a-Number).
Any comparison with NaN using <, >, <=, or >= always results in false.
Result: false.

3. undefined < 0
Explanation:
Similar to the second case, undefined is converted to NaN.
Since NaN is not a valid number, relational comparisons like < return false.
Result: false.

Summary of Key Rules:
Equality with undefined:
undefined is only equal to null (using ==), and nothing else.
It is not equal to numbers, strings, or booleans.
undefined in Relational Comparisons (<, >, <=, >=):
undefined is converted to NaN in numeric contexts.
Comparisons with NaN always return false.*/


// === 

console.log("2" === 2); // check datatype === //== not check datatype


//The reason is that an equality check == and comparisons 
//> < >= <= work differently.
//Comparisons convert null to a number,treating it as 0.
//That why (3) null>=0 is true and (1) null>0 is false
