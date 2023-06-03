

//FIrst class functions or first class citizens

//functions are treated as first class citizens meaning they can be treated like any other value

//CAse 1 assigning functions to a variable

// const greet = function (name) {
//     console.log(`Hello , ${name}`)
// }

// greet('John')


//CAse 2 passing functions as arguments


// function calculate(operation, a, b) {
//     return operation(a, b);
// }

// function add(a, b) {
//     return a + b;
// }


// function subtract(a, b) {
//     return a - b;
// }

// // console.log(add(5, 3))
// // console.log(subtract(5, 3))

// console.log(calculate(add, 5, 3));
// console.log(calculate(subtract, 5, 3));


//CAse 3 Returning functions from other functions

// function x() {

//     var a = 10

//     return function y() {
//         console.log(a)
//     }
// }
// const z = x()
// z()
//closures in javascript
//inner function remebers the variabels and functions of outer functions
//even when the execution context of outer function deleted


// function x() {

//     var a = 10

//     function y() {
//         console.log(a)
//     }

//     return y
// }
// const z = x()
// z()



// function x() {

//     var a = 10



//     return function () {
//         console.log(a)
//     }
// }
// const z = x()
// z()


function x() {

    var a = 10



    return () => {
        console.log(a)
    }
}
const z = x()
z()