// Date : Date is an object in javascript. 
// JavaScript stores dates as number of milliseconds since January 01, 1970
//JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
const myDate = new Date();

console.log(typeof myDate);//Date is an object in javascript. 

console.log(myDate) //Output :2024-07-05T11:22:07.235Z
// We can use various methods to convert this date into more readable value.

console.log(myDate.toString()) //Output : Fri Jul 05 2024 11:22:07 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toLocaleString()) // Output : 7/5/2024, 11:22:07 AM //show date and time
console.log(myDate.toLocaleDateString()) //Output : 7/5/2024//show only date 
console.log(myDate.toLocaleTimeString()) // Output : 11:22:07 AM //show only time

console.log(myDate.toDateString()) //Output :Fri Jul 05 2024 //show day and month name with date and year 
console.log(myDate.toTimeString()) // Output :11:22:07 GMT+0000 (Coordinated Universal Time)

console.log(myDate.toISOString()) // Output : 2024-07-05T11:22:07.235Z
console.log(myDate.toJSON()) //Output : 2024-07-05T11:22:07.235Z

// let myCreatedDate = new Date(2023,0,23,5,8)
let myCreatedDate = new Date("2024-06-05")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp =Date.now()
//Date. now() returns the number of milliseconds since January 1, 1970.
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now());



// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})