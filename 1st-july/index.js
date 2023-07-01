

// function multiplyBy2(num) {
//     return num * 2;
// }
// multiplyBy2.stored = 5;
// multiplyBy2(3);

//complete solution 3 
//use new keyword that will autmoate things and put the single copies inside prototype


// function UserCreator(name, score) {
//     this.name = name;
//     this.score = score;
// }

// UserCreator.prototype.increment = function () {
//     this.score++;
// }

// // const user1 = new UserCreator('john', 10)

// user1.increment()

// console.log(user1.__proto__)

//solution 4 es6 classes 
class UserCreator {
    constructor(name, score) {
        this.name = name
        this.score = score
    }
    increment() {
        this.score++
    }

}
const user1 = new UserCreator('peter', 5)

console.log(user1.__proto__)
