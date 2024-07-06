//array 
//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
//In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

//JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)

//JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.

//JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

// shalow copies // https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy

//deep copies // https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy

const myArr=[0,1,2,3,4,5,6,7,8]
// console.log(myArr);
// console.log(myArr[1]);

// const myHeroes=["ironman","shaktuman"]

// const myArr2= new Array(1,2,3,4,5)
// console.log(myArr2);


//array methods

//The push() method of Array instances adds the specified elements to the end of an array and returns the new length of the array.
// myArr.push(6)
// console.log(myArr);