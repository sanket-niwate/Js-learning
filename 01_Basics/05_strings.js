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