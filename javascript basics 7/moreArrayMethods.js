

//array methods

//Add/ remove elements

//push, pop, unShift, shift


// let user = {
//     name: 'Peter',
//     age: 20
// }

// delete user.age
// console.log(user)

// let nums = [10, 20, 30];

// delete nums[1]; //this only delets the value and not rearrange the elements

// console.log(nums);

//so use special methods like  splice to delete

//splice => swiss knife for arrays => that means it can do everything like
// insert, remove and replace elements

//syntax =>  array.splice(startIndex, deleteCount, element1, ...., elementN)


// let fruits = ['apples', 'oranges', 'bananas'];

// // fruits.splice(1, 1); //from index 1 remove 1 element

// // fruits.splice(0, 3, 'grapes', 'mangoes')

// // let removedFruits = fruits.splice(0, 2)

// // console.log(fruits);
// // console.log(removedFruits);

// fruits.splice(2, 0, 'grapes', 'mangoes');
// console.log(fruits);


//Note => negative indexes are also allowed

// let nums = [1, 2, 5];

// //from index -1 (one step from end)
// //delete 0 elements
// //then add 3 and 4

// nums.splice(-1, 0, 3, 4);

// console.log(nums);


//slice
//syntax => array.slice(startIndex, endIndex)

//=> it returns a new array from startIndex to endIndex but not including endIndex
// if 2 argument is not passed it goes till the end


// let charArray = ['h', 'e', 'l', 'l', 'o'];

// // let returnedElements = charArray.slice(1, 3)
// // console.log(returnedElements)
// // console.log(charArray)

// // console.log(charArray.slice(-2))

// let copiedArray = charArray.slice()
// console.log(copiedArray)



//how many ways we have covered to create a copy of the array

//spread syntax
//slice
//Object.assign()

//concat

//creates a new array that includes values from others arrays

//syntax => array.concat(arg1, arg2....)

// let nums = [10, 20];

// // let newNums = nums.concat([30, 40])

// // let newNums = nums.concat([30, 40], [50, 60])


// let newNums = nums.concat([30, 40], 50, 60)


// console.log(newNums)


// // console.log(nums.concat([30, 40]))

// console.log(nums)



//Search in an array

//indexOf/lastIndexOf/includes

//syntax is array.indexOf(value, startIndex) => looks for the value starting from index startIndex and returns the index if value is present otherwise it returns -1
//syntax is array.includes(value, startIndex) =>  looks for the value starting from index startIndex  and returns true if found

// let array = [10, 20, false]

// // console.log(array.indexOf(0))

// // console.log(array.indexOf(false))

// // console.log(array.indexOf(null))

// console.log(array.includes(1))

//exception => include method handles NaN correctly

// let array = [NaN];

// console.log(array.indexOf(NaN))
// console.log(array.includes(NaN))

//lastIndexOf => array.lastIndexOf is same as indexOf but looks from right to left


// let fruits = ['apples', 'mangoes', 'apples'];

// console.log(fruits.indexOf('apples'))
// console.log(fruits.lastIndexOf('apples'))



