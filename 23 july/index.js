// You are given a function multiplyBy(factor) that takes a positive integer factor as input and returns a curried function. The curried function, when called with a positive integer number, returns the result of multiplying the number by the provided factor.

// Implement the multiplyBy function and demonstrate its usage with the following scenarios:

// Create a curried function multiplyBy2 by calling multiplyBy(2). Use multiplyBy2 to calculate the product of a given positive integer number and 2.

// Create a curried function multiplyBy3 by calling multiplyBy(3). Use multiplyBy3 to calculate the product of a given positive integer number and 3.

// Expected Output:

// For multiplyBy2:

// Input: multiplyBy2(5)
// Output: 10 (5 * 2)
// For multiplyBy3:

// Input: multiplyBy3(4)
// Output: 12 (4 * 3)

//currying
//using closures
// function multiplyBy(factor) {

//     return function (number) {
//         return number * factor;
//     }

// }


// const multiplyBy2 = multiplyBy(2);
// const multiplyBy3 = multiplyBy(3);


// console.log(multiplyBy2(5));
// console.log(multiplyBy3(4));

// using bind method
// function multiplyBy(factor, number) {
//     return factor * number;
// }

// const multiplyBy2 = multiplyBy.bind(null, 2);
// const multiplyBy3 = multiplyBy.bind(null, 3);
// console.log(multiplyBy2(5));
// console.log(multiplyBy3(4));

// console.log(multiplyBy.bind(null, 4)(6));
// console.log(multiplyBy.bind(null, 5)(3));


// let sum = function (a) {
//     // console.log(a)
//     return function (b) {
//         if (b) {
//             return a + b;
//         }
//         return a;
//     }
// }




// console.log(sum(10)()) //10
// console.log(sum(10)(5)) //15
// console.log(sum(20)(10)) //30


//infinite curryong

let sum = function (a) {
    let result;
    return function (b) {

        if (b) {
            result = a + b;
            return sum(result)
            //again recursively heck for the next set of arguments
        }
        return a
    }
}



console.log(sum(10)(20)(30)(60)()); //100
console.log(sum(10)(20)()); //30