// console.log("s");
// console.log("a");
// console.log("n");
// console.log("k");
// console.log("e");
// console.log("t");


function Myname() {
    console.log("s");
console.log("a");
console.log("n");
console.log("k");
console.log("e");
console.log("t");

}

// Myname()

function addNumber(number1,number2) {
 console.log(number1+number2);
}
// addNumber(11,66)
// console.log(addNumber(1,2)); //output undefined


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // let result = console.log(number1 + number2);
    // return result
    // return number1 + number2
}
// addTwoNumbers(3,5)
// console.log(addTwoNumbers(3, 5));
// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sk"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())
// console.log(loginUserMessage(""))
// console.log(loginUserMessage("sanket"))

function calculateCartPrice(...num1) {
    return num1

}

// console.log(calculateCartPrice(5,1,2,5));

const user={
    username:"sanket",
    prices:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));