//The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects.

//The value of this in JavaScript depends on how a function is invoked (runtime binding), not how it is defined. When a regular function is invoked as a method of an object (obj.method()), this points to that object. When invoked as a standalone function (not attached to an object: func()), this typically refers to the global object (in non-strict mode) or undefined (in strict mode). The Function.prototype.bind() method can create a function whose this binding doesn't change, and methods apply() and call() can also set the this value for a particular call.

//Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined. This behavior makes arrow functions particularly useful for callbacks and preserving context. However, arrow functions do not have their own this binding. Therefore, their this value cannot be set by bind(), apply() or call() methods, nor does it point to the current object in object methods

const user={
    username:"sanket",
    price:999,

    welcomeMessage:function () {
        console.log(`${this.username}`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username="san"
// user.welcomeMessage()
// console.log(this);


//output
/*sanket
{
    username: 'sanket',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }
  san
  {
    username: 'san',
    price: 999,
    welcomeMessage: [Function: welcomeMessage]
  }*/


// function skt(){
//     let username = "s"
//     console.log(this.username);
// }

// skt()

// const s = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const s =  () => {
    let username = "hitesh"
    console.log(this);
}


// s()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "s"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()