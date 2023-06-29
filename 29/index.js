

// const user1 = {
//     name: 'John',
//     score: 10,
//     increment: function () {
//         user1.score++;
//     }
// }; //object literal

// user1.increment();
// console.log(user1.score)

// const user2 = {};
// user2.name = 'Peter';
// user2.score = 5;
// user2.increment = function () {
//     user2.score++;
// }
// user2.increment();
// console.log(user2.score)

// const user3 = Object.create(null);
// user3.name = 'June';
// user3.score = 2;
// user3.increment = function () {
//     user3.score++;
// }
// user3.increment();
// console.log(user3.score)


//this is encapsulation

//this is getting repetetive and we are breaking DRY principle
//and what if we have millions of users

//solution 1 produce objects with functions


// function userCreator(name, score) {
//     const newUser = {};
//     newUser.name = name;
//     newUser.score = score;
//     newUser.increment = function () {
//         newUser.score++;
//     };
//     return newUser;
// };

// const user1 = userCreator('John', 10);
// const user2 = userCreator('Peter', 5);
// user1.increment();
// user2.increment();
// console.log(user1.score, user2.score);

//bad approach and practically not used because we attach or we r copying the identical functions like increment in this case to every single object
//image we had 100,200 fucntions

//good approach would be to only have 1 copy of function stored

//solution 2 use only one increment function in this case

//store the increment function inside an object
//if the increment function is not there in user 1
//lookup the userFunctionStore object to check if it is there or not
//But How to make this link?


function userCreator(name, score) {
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
};

const userFunctionStore = {
    increment: function () {
        this.score++;
    },
    login: function () {
        console.log('You are logged In')
    }
};
const user1 = userCreator('John', 10);
const user2 = userCreator('Peter', 5);

//no problems, its great
//maybe a little long as u create object everytime even for a single item like a quiz board
//sophisticated approach but not standard

