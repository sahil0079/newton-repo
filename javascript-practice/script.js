



// const numbers = [1, 2, 3, 4, 5];

//includes

// let isNumber = numbers.includes(3)

// isNumber


// let isNumber = numbers.reduce((includes,value) => {

//     if(value == 10){
//         return true
//     }
//     return includes
// }, false)

// isNumber


// let isNumberPresent = numbers.reduce((includes, value) => (includes ? includes : value == 4), false)

// isNumberPresent


//map

const numbers = [1, 2, 3, 4, 5];


let transform = numbers.reduce((arr, value) => {

    // debugger
    arr = [...arr, value * 10]

    return arr
}, [])

// transform

// const numbers = [1, 2, 3, 4, 5];


// let transform = numbers.reduce((acc, curr) => [...acc, curr * 100], [])

// console.log(transform)

