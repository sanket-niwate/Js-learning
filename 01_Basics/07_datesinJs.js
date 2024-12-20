// Date : Date is an object in javascript. 
// in date month start with 0 
// JavaScript stores dates as number of milliseconds since January 01, 1970
/*JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight at
the beginning of January 1, 1970, UTC (the epoch).*/
const myDate = new Date();

console.log(typeof myDate);//Date is an object in javascript. 

console.log(myDate) //Output :2024-07-05T11:22:07.235Z
// We can use various methods to convert this date into more readable value.

//toString()
//Converts the date to a string.
console.log(myDate.toString()) //Output : Fri Jul 05 2024 11:22:07 GMT+0000 (Coordinated Universal Time)

//toLocaleString()
//Converts to a string in local time, based on locale settings.
console.log(myDate.toLocaleString()) // Output : 7/5/2024, 11:22:07 AM //show date and time

//toLocaleDateString()
//Converts a Date object to a string, formatted according to the locale's date conventions.
console.log(myDate.toLocaleDateString()) //Output : 7/5/2024//show only date 

// toLocaleTimeString()
//Converts a Date object to a string, formatted according to the locale's time conventions.
console.log(myDate.toLocaleTimeString()) // Output : 11:22:07 AM //show only time

//toDateString()
//Returns the date portion of a date object.
console.log(myDate.toDateString()) //Output :Fri Jul 05 2024 //show day and month name with date and year 

//toTimeString()
//Returns the time portion of a date object.
console.log(myDate.toTimeString()) // Output :11:22:07 GMT+0000 (Coordinated Universal Time)

//toISOString()
//Converts the date to an ISO 8601 string.
console.log(myDate.toISOString()) // Output : 2024-07-05T11:22:07.235Z

//toJSON() 
//Converts a Date object to a string in ISO 8601 format (e.g., "2024-12-20T10:00:00.000Z") for JSON serialization.
console.log(myDate.toJSON()) //Output : 2024-07-05T11:22:07.235Z

// let myCreatedDate = new Date(2023,0,23,5,8)
let myCreatedDate = new Date("2024-06-05")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


// Getting Components of a Date //
// getFullYear(): Returns the year (e.g., 2024).
// getMonth(): Returns the month (0-11, where 0 is January).
// getDate(): Returns the day of the month (1-31).
// getDay(): Returns the day of the week (0-6, where 0 is Sunday).
// getHours(): Returns the hour (0-23).
// getMinutes(): Returns the minutes (0-59).
// getSeconds(): Returns the seconds (0-59).
// getMilliseconds(): Returns the milliseconds (0-999).
// getTime(): Returns the timestamp (milliseconds since January 1, 1970).
// getTimezoneOffset(): Returns the difference in minutes between local time and UTC.

const now = new Date();

console.log(now.getFullYear()); // Year (e.g., 2024)
console.log(now.getMonth());    // Month (0-11, where 0 is January)
console.log(now.getDate());     // Day of the month (1-31)
console.log(now.getDay());      // Day of the week (0-6, where 0 is Sunday)
console.log(now.getHours());    // Hours (0-23)
console.log(now.getMinutes());  // Minutes (0-59)
console.log(now.getSeconds());  // Seconds (0-59)


// Setting Components of a Date //
// setFullYear(year): Sets the year.
// setMonth(month): Sets the month (0-11).
// setDate(day): Sets the day of the month (1-31).
// setHours(hours): Sets the hour (0-23).
// setMinutes(minutes): Sets the minutes (0-59).
// setSeconds(seconds): Sets the seconds (0-59).
// setMilliseconds(milliseconds): Sets the milliseconds (0-999).
// setTime(milliseconds): Sets the date and time based on a timestamp.

let myTimeStamp =Date.now()
//Date. now() returns the number of milliseconds since January 1, 1970.
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Date.now());



// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //Dividing the value of Date.now() by 1000 converts the milliseconds to seconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `


// Option	           Description	                Possible Values
// weekday	           Day of the week	          "short", "long", "narrow"
// year	           Year	                      "numeric", "2-digit"
// month	           Month	                  "numeric", "2-digit", "short", "long", "narrow"
// day	               Day of the month	           "numeric", "2-digit"
// hour	           Hour of the day	            "numeric", "2-digit"
// minute	           Minute of the hour	          "numeric", "2-digit"
// second	           Second of the minute	             "numeric", "2-digit"
// timeZoneName	   Name of the time zone	           "short", "long"
// hour12	           Use 12-hour or 24-hour format	     true, false 

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
    timeZoneName: "long",
}));
// Example output: "Friday, December 20, 2024, 03:30:00 PM India Standard Time"

newDate.toLocaleString('default', {
    weekday: "long",
//"short": Abbreviated day name (e.g., "Mon").
// "long": Full day name (e.g., "Monday").
// "narrow": Single character for the day (e.g., "M").
    
})
