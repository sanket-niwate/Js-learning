const marvel_heros =["ironman","thor","spiderman"]

const dc_heros =["superman","batman","flash"]
// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3],[1]);


//The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// const all_heros=marvel_heros.concat(dc_heros);      
// console.log(all_heros);


//spread operator
//The spread (...) syntax allows an iterable, such as an array or string, to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected. In an object literal, the spread syntax enumerates the properties of an object and adds the key-value pairs to the object being created.//Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element. See rest parameters and rest property.
// const all_new_heros =[...marvel_heros,...dc_heros]
// console.log(all_new_heros);


//The flat() method of Array instances creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const another_array=[1,2,3,[6,6,8],5,[5,6,9,5,6],[5,5,6]]


// console.log(another_array);

// const real_another_array=another_array.flat(Infinity)
// console.log(real_another_array);

//The Array.isArray() static method determines whether the passed value is an Array.
// console.log(Array.isArray("sanket"));
// console.log(Array.isArray([]));
// console.log(Array.isArray());

//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
console.log(Array.from("sanket"));
console.log(Array.from({name:"sanket"}));//imp

//The Array.of() static method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.
let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));