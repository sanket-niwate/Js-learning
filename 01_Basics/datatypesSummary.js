//primitive datatypes

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt


const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



/* Premitive Datatypes

                  Type                                   typeof

i)             Number                               number
ii)            String                                   string
iii)           Boolean                               boolean
iv)           Bigint                                   bigint
v)            Symbol                                symbol
vi)           Null                                      object
vii)          Undefined                           undefined


* Non-Premitive OR Referance OR Object datatype

                  Type                                   typeof

i)               Object                                object
ii)              Array                                  object
iii)             Function                            function(object)*/




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


//stack(primitive ),Heap(non-primitive)

let myEmailname="sanket@google.com";
let anothername=myEmailname;

anothername="s@google.com";

console.log(myEmailname);
console.log(anothername);


let userOne={
    email:"sanket@gmail.com"
}

let userTwo=userOne;

userTwo.email="sa@gmail.com"

console.log(userOne);
console.log(userTwo);

// https://excalidraw.com/#json=i-IPbk7s_g8KGrrQZY-IV,FAP4qbPr9o2GjpftuhmFUw