

//call, apply abd bind => explicit this binding


// let user1 = {
//     name: 'john',

// }
// let user2 = {
//     name: 'peter',
// }
// function greet(age, country) {
//     console.log(`Hello, ${this.name} and my age is ${age}! and i live in ${country}`);
// }

// greet.call(user1, 20, 'India');
// greet.call(user2);

// greet.apply(user1, [20, 'India']);


//bind method => hard binding

// const greetings1 = greet.bind(user1, 20, 'India');
// const greetings2 = greet.bind(user2, 30, 'USA');


// // console.log(greetings)

// ///1000 lines of code
// greetings1()
// //500 lines of code
// greetings2()





// var user1 = {
//     name: 'john',

// }

// function greet() {
//     console.log(this.user1.name);
// }
// greet()


// // console.log(message)
// // let message = 'hello';


//multilevel inheritance + polymorphism

// class User {
//     constructor(name, email) {
//         //instance properties
//         this.name = name;
//         this.email = email;
//     }
//     getInfo() {
//         console.log(`Name: ${this.name}, Email: ${this.email}`);
//     }
// }

// class PaidUser extends User {
//     constructor(name, email, membershipLevel) {
//         super(name, email);
//         this.membershipLevel = membershipLevel;
//     }

//     getInfo() {
//         super.getInfo()
//         console.log(`Membership level: ${this.membershipLevel}`)
//     }
//     upgradeMembership(newLevel) {
//         this.membershipLevel = newLevel;
//         console.log(`Membership upgraded to ${newLevel}`)
//     }
// }

// class PremiumUser extends PaidUser {
//     constructor(name, email, membershipLevel, premiumFeature) {
//         super(name, email, membershipLevel);
//         this.premiumFeature = premiumFeature;
//     }
//     getInfo() {
//         super.getInfo()
//         console.log(`Premium Feature: ${this.premiumFeature}`);
//     }
//     usePremiumFeature() {
//         console.log(`Using premium feature: ${this.premiumFeature}`)
//     }
// }

// //create instances of different user types

// const user = new User("John", 'john@gmail.com');
// user.getInfo();

// const paidUser = new PaidUser('Peter', 'peter@yahoo.com', 'gold');
// paidUser.getInfo();
// paidUser.upgradeMembership('Platinum');

// const premiumUser = new PremiumUser('Mike', 'mike@zoho.com', 'Platinum', 'Exclusive content')
// premiumUser.getInfo();
// premiumUser.usePremiumFeature()




//getters and setters
//regex

class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    get fullName() {
        return this.name
    }


    set fullName(value) {
        this.name = value
    }

    get emailAddress() {
        return this.email
    }

    set emailAddress(value) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (emailRegex.test(value)) {
            this.email = value

        } else {
            throw new Error('Invalid email address')
        }
    }
}

const user = new User('Mike tyson', '123');

console.log(user.fullName)
console.log(user.emailAddress)


user.fullName = 'Peter smith'
user.emailAddress = 'pete@yahoo.com'

console.log(user.fullName)
console.log(user.emailAddress)
