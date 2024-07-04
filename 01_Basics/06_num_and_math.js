const score=400
console.log(score)

const balance= new Number(100)
console.log(balance);

console.log(balance.toString().length)

console.log(balance.toFixed(2));

const otherNumber= 123.5464

console.log(otherNumber.toPrecision(4))

const hundreds=1000000000

console.log(hundreds.toLocaleString('en-IN'))

//max value //min value 

//++++++++++++++++++++Maths+++++++++++
console.log(Math);
console.log(Math.abs(-4));//The Math.abs() static method returns the absolute value of a number.

console.log(Math.round(4.6));

console.log(Math.ceil(4.1)) //The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

console.log(Math.floor(4.9))//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

console.log(Math.min(4,3,6,8));

console.log(Math.max(4,3,6,8));

console.log(Math.random())//The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1, with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

console.log(Math.floor(Math.random()*10)+1);

const min=1
const max=6

console.log(Math.floor(Math.random()*(max-min+1))+min);