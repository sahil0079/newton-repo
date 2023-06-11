
// //chaining of methods

// const numbers = [10, -20, 30, -40, 50];

// // All positive numbers:
// // All negative numbers:
// // Positive numbers under 50:


// const allPositive = numbers.filter(v => v > 0)

// allPositive

// const allNegative = numbers.filter(v => v < 0)

// allNegative

// // const positiveUnder50 = numbers.filter(v => v > 0 && v < 50)
// // positiveUnder50


// const positiveUnder50 = 
//     numbers.filter(v => v > 0)
//         .filter(v => v < 50)

// positiveUnder50




// const numbers = [10,20,30,40,50];


// //multiply all numbers by 10

// const numbersTimes10 = numbers.map((v) => v * 10);
// numbersTimes10


// // const numbersTimes10Obj = numbers.map(function(v){

// //     return {
// //         value: v * 10
// //     }
// // })

// const numbersTimes10Obj = numbers.map((v) => ({value: v*10}))

// numbersTimes10Obj


const numbersWithNegative = [10, -20, 30, -40, 50];

//get positive numbers and then multiply by 10

const positiveBy10 = numbersWithNegative.filter((v) => v > 0).map((v) => v * 10)

positiveBy10

