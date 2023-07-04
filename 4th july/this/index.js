

// function x() {
//     console.log(this);
// }

//1st way of calling the function
// implicit binding

// var masterclass = {
//     teacher: 'John',
//     askQuestion(question) {
//         console.log(this.teacher, question);
//     }
// }

// masterclass.askQuestion("What is implicit binding in javascript?");




// function askQuestion(question) {
//     console.log(this.teacher, question);
// }
// var masterclass1 = {
//     teacher: 'john',
//     askQuestion: askQuestion,
// }
// var masterclass2 = {
//     teacher: 'peter',
//     askQuestion: askQuestion,
// }

// masterclass1.askQuestion("How to share this function?");
// masterclass2.askQuestion("How to share this function?");

//2 way of calling the function
//explicit binding


// function askQuestion(question) {
//     console.log(this.teacher, question);
// }
// var masterclass1 = {
//     teacher: 'john',
// }
// var masterclass2 = {
//     teacher: 'peter',
// }
// askQuestion.call(masterclass1, "Is it possible to explicitly set the this context?");
// askQuestion.call(masterclass2, "Is it possible to explicitly set the this context?");

//constructor calls


// function askQuestion(question) {
//     console.log(this.teacher, question);
// }

// // var newEmptyObject = new askQuestion('What is new doing here');


// var newEmptyObject = {}
// askQuestion.call(newEmptyObject, 'What is new doing here')
// console.log(newEmptyObject, 'What is new doing here')


//new keyword does 4 things

//create a brand new empty object
//* links that object to another object
//returns an object


//default binding

// var teacher = "John"

// function askQuestion(question) {
//     console.log(this.teacher, question);
// }

// function askQuestionAgain(question) {
//     "use strict"
//     console.log(this.teacher, question);
// }

// askQuestion("Whats the non-strict mode default?");
// askQuestionAgain("Whats the strict mode default?");




// function x() {
//     function y() {
//         function z() {
//             'use strict'
//             a = 10
//         }
//         z()
//     }
//     y()
// }
// x()
// console.log(a)

// var masterclass1 = {
//     teacher: 'john',
//     askQuestion(question) {
//         function x() {
//             console.log(this.teacher, question);
//         }
//         x()
//     }
// }

// masterclass1.askQuestion("what is this binding?");


var masterclass1 = {
    teacher: 'john',
    askQuestion(question) {
        var x = () => {
            console.log(this.teacher, question);
        }
        x()
    }
}

masterclass1.askQuestion("what is this binding?");