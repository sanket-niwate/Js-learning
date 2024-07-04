const name ="sanket"
const repoCount=50

console.log(name+repoCount+" value");

console.log(`hello my name is ${name}and my repo is ${repoCount}`);

const gameName = new String('sanket')


// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-2, 4)
console.log(anotherString);

const newStringOne = "   sanket    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sanket.com/sanket%20niwate"

console.log(url.replace('%20', '-'))

console.log(url.includes('sanket'))

console.log(gameName.split('-'));