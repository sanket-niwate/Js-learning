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

//pop() remove last element
// myArr.pop()
// console.log(myArr);

//unshift() is add element start of the array
// myArr.unshift(77)
// console.log(myArr);

//shift() remove element start of array
// myArr.shift()
// console.log(myArr);

//The includes() method of Array instances determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// console.log(myArr.includes(54654));

//The indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
// console.log(myArr.indexOf(9));

//The join() method of Array instances creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

console.log("A ",myArr);

const mynn1=myArr.slice(1,3)
console.log(mynn1);

console.log("B ",myArr);
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

const mynn2= myArr.splice(1,3)
console.log("C ",myArr);
console.log(mynn1);
console.log(mynn2);
