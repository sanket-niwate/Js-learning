//singleton
//object.create

//object literals

const mySym=  Symbol("key1")//interview

const JsUser={
    name:"sanket",
    age:18,
    [mySym]:"mykey1",
    "full name":"sanket niwate",
    location:"maharashtra",
    email:"sanket@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// console.log(JsUser);


JsUser.email = "sanket@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "sanket@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

