
//Functions

//Function Declaration

// function x(){
//     console.log('hello')
// }


//Callback function

//in this y is a cllback function
//x is called higher order function
// function x(callback) {

//     console.log(20)
//     // 100 lines code
//     callback()
// }

// x(y)

// function y() {
//     console.log(100)
// }

//Function Expression

// //named function expression
// let y = function greetings(){
//     console.log('Hi there')
// } 

//un-named function expression
// let y = function () {
//     console.log('Hi there')
// }

// y()


//Anonymous function 
// function () {
//     console.log('Hi there')
// }



// function x(callback) {

//     console.log(20)
//     // 100 lines code
//     callback()
// }

// x(function () {
//     console.log(100)
// })



//arrow function

// let message = function sayHi(){
//     console.log('Hi all!')
// }

// let message = () => console.log('Hi all!')


// message()

// let sum = (a, b) => a + b;
// console.log(sum(10, 20))

//IIFE immediately invoked function expression
//function expressions that are immediately executed after being defined

// (function () {
//     console.log('This is an IIFE anonymous function ')
// })()

console.log(add(10, 20))
console.log(sum(100, 200))



function add(a, b) {

    return a + b;
}


var sum = function (num1, num2) {
    return num1 + num2;
}
