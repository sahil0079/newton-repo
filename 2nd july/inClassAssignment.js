// Problem Statement
// Create an Employee constructor function which should take three arguments: name, yearOfJoin, and location. These arguments should be used to set the initial values of the name, yearOfJoin, and location properties respectively.

// Add a getEmployeeDetails method that returns "Name: name, Year of Join: yearOfJoin, Location: location".

// Now, create a private property, salary, in the Employee constructor. Create two methods setSalary, which will take an argument, amount, and set it to salary, and getSalary method, which should return the salary. Make sure the salary property can only be accessed through these methods only.


// function Employee(name, yearOfJoin, location) {
//     let salary;
//     this.name = name;
//     this.yearOfJoin = yearOfJoin;
//     this.location = location;

//     this.getEmployeeDetails = function () {
//         return `Name: ${this.name}, Year of Join: ${this.yearOfJoin}, Location: ${this.location}`
//     }
//     this.setSalary = function (amount) {
//         salary = amount;
//     }
//     this.getSalary = function () {
//         return salary;
//     }
// }

// //order count
// function generateOrder() {
//     let count = 0;

//     return function func() {
//         count++;
//         return "Total orders = " + count;
//     }
// }


// let obj1 = new Object();