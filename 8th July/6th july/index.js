
//Property descriptors

// "use strict"
// const obj = {};

// Object.defineProperty(obj, 'name', {
//     value: 'John',
//     writable: false,
//     enumerable: false
// });

// console.log(obj.name)

// obj.name = 'Peter'

// console.log(obj.name)

// for (let prop in obj) {
//     console.log(prop)
// }


//Date Object in js

// const currentDate = new Date();
// console.log(currentDate)

// const specifiedDate = new Date(2023, 0, 8, 12, 30, 0);
// // year,month,date,hours,minutes,seconds,milliseconds
// console.log(specifiedDate)





// const currentDate = new Date();
// console.log(currentDate.getFullYear()) //returns the year 4 digits
// console.log(currentDate.getMonth())  //returns month from 0-11

// console.log(currentDate.getDate())  // 1 -31

// console.log(currentDate.getDay())  // from sunday - 0 to saturday - 6

// console.log(currentDate.getHours())  //0 -23

// console.log(currentDate.getMinutes())  //0 -59

// console.log(currentDate.getSeconds())  //0 -59


// const date = new Date();

// date.setFullYear(2024)
// date.setMonth(8)
// date.setDate(15)
// date.setHours(18)
// date.setMinutes(30)

// console.log(date)


//format Date Objects

const date = new Date()

console.log(date.toDateString()) //human readable

console.log(date.toLocaleString()) //user's locale

console.log(date.toISOString()) //date in UTC








