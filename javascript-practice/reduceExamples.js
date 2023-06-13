

// Given an array of groups, where each group is represented by a count-value pair, how can you use the reduce() method in JavaScript to transform the groups into a new array based on the count and value pairs within each group?
// Input:
// let groups = [
//     [2, 3],
//     [3, 7],
//     [4, 5]
// ];
// Output

// let result = [3, 3, 7, 7, 7, 5, 5, 5, 5];
// console.log(result); // [3, 3, 7, 7, 7, 5, 5, 5, 5]

//naive approach

// let result = groups.reduce((arr, [count,value]) => {
    
//     for (let index = 0; index < count; index++){
//         arr.push(value)
//     }
//     return arr
// }, [])
// result

//easy method

// let result = groups.reduce((arr, [count, value])=> [
//     ...arr, ...Array(count).fill(value)
// ], [])

// result


// let newArray  = Array(5)
// newArray

// let groups = [
//     [2, 3],
//     [3, 7],
//     [4, 5]
// ];
// let result = groups.reduce(function(acc,curr){

//     let count = curr[0];
//     let value = curr[1];
//     console.log(count)
//     console.log(value)

//     let newArray = Array(count).fill(value);

//     console.log(newArray)
//     // acc = [...acc, ...newArray]

//     acc =  acc.concat(newArray)

//    return acc
// }, [])


// result


// How can you use the reduce() method in JavaScript to find the minimum and maximum values in an array of numbers?
// Input:
// let numbers = [12, 2, 3, 4, 5, 4, 3, 2, 1, 10];


// Output:

// console.log(minMax); // { min: 1, max: 12 }

// let numbers = [12, 2, 3, 4, 5, 4, 3, 2, 1, 10];

// let minMax = numbers.reduce(function({min,max},value){

//     console.log(Math.min(min,value))
//     console.log(Math.max(max,value))

//     return {
//         min: Math.min(min,value),
//         max:Math.max(max,value)
//     }

// }, {
//     min: Infinity,
//     max: -Infinity
// })
// minMax

