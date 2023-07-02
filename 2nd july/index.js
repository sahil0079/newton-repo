// //class syntax

// //classes are used to create objects
// //classes are blue print 


// // //declare class
// // class Person {
// //     constructor(name, height) {
// //         //instance properties
// //         this.name = name;
// //         this.height = height;
// //     }
// //     //instance methods
// //     getName() {
// //         console.log(`Hi my name is ${this.name}`)
// //     }

// // }

// // //instantiate an object
// // const person1 = new Person('john', 190);
// // // const person2 = new Person();
// // person1.getName()



// //class => one or more objects

// //inside constructor function
// //props => inside constructor
// //methods => underthe constructor

// // class User {

// // }

// // const user1 = new User();
// // console.log(user1)

// class userCreator {
//     constructor(name, score) {
//         this.name = name;
//         this.score = score;
//     }
//     sayName() {
//         console.log(`I am  ${this.name}`);
//     }
//     increment() {
//         this.score++;
//     }
// }

// const user1 = new userCreator("John", 10);
// user1.sayName();

// class paidUserCreator extends userCreator {
//     constructor(paidName, paidScore, accountBalance) {
//         super(paidName, paidScore)
//         this.accountBalance = accountBalance;
//     }
//     increaseBalance() {
//         this.accountBalance++;
//     }
// }
// const paidUser1 = new paidUserCreator('Peter', 8, 30);
// // paidUser1.increaseBalance();
// // paidUser1.sayName();
// // console.log(paidUser1.accountBalance)

// //error
// // user1.increaseBalance()
// // console.log(user1.accountBalance)



// let user = {
//     name: 'john',
//     age: 30
// }
// function x() {
//     console.log('hello')
// }

let nums = [10, 20, 30, 40]