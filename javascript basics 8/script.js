
//Searching in array

//find / findIndex/ findLastIndex


//find syntax => array.find(function(item, index, array){
// 
// })

// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Peter" },
//     { id: 3, name: "Mary" }
// ];


// let user = users.find(function (item, index, array) {

//     return item.id == 3   //explicit returns
// })

// let user = users.find((item, index, array) => {

//     return item.id == 3
// })

// let user = users.find((item, index, array) => (
//     item.id == 3
// ))

// let user = users.find(item => item.id == 3)
// console.log(user)

//array.findIndex it has the same syntax as find method

// let user = users.findIndex(item => item.id == 3)
// console.log(user)

//array.findLastIndex method is like findIndex , but searchers from right to left
//just like lastIndexOf


// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Peter" },
//     { id: 3, name: "Mary" },
//     { id: 4, name: "John" },
// ];
// console.log(users.findIndex(user => user.name == 'John'))
// console.log(users.findLastIndex(user => user.name == 'John'))

//filter => returns an array of matching elements
// let users = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Peter" },
//     { id: 3, name: "Mary" },
//     { id: 4, name: "John" },
// ];

// let user = users.filter(user => user.id == 3)
// console.log(user)

// let filteredUsers = users.filter(user => user.id !== 3)
// console.log(filteredUsers)


// let filteredUsers = users.filter(function (item, index, array) {

//     if (item.id == 3) {
//         return item
//     }
// })


// let filteredUsers = users.filter(function (item, index, array) {

//     return item.id == 3
// })

// console.log(filteredUsers)

//interview question map filter and reduce are also array methods 


// greetings(callback)
// greetings => higher order function => that takse functions as arguments 
// callback => functions that are passed as arguments



// let numbers = [10, 20, 30, 40];

// let filteredNums = numbers.filter(num => num < 40)

// console.log(numbers)
// console.log(filteredNums)




//transform an array
//map => most used method 

//it calls the function for each element of the array and returns the array results

// [1,2,3]  => [2,4,6]




// let numbers = [10, 20, 30, 40];

// let doubleNums = numbers.map((item, index, array) => item * 2)

// console.log(doubleNums)
// console.log(numbers)

// let namesOfUsers = ["Aditya", "Vineet", "Sachin", "Shamsheer"];

// //return the length of the names in the array


// let lengths = namesOfUsers.map(user => user.length)

// console.log(lengths)


// let arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(arr)
// arr.reverse()
// console.log(arr)



// messaging app

// John, Peter, Pete

// [John, Peter, Pete]

//split syntax string.split(delimter)


// let names = 'John,Peter,Pete';

// // let array = names.split(',')
// // console.log(array)

// let array = names.split(',', 2)


// for (let name of array) {
//     console.log(`A mesage to ${name}`)
// }

//split into letters

// let message = 'hello';

// console.log(message.split(''));


//array.join => does the reverse to split


// let names = ['John', 'Peter', 'Pete'];

// // let string = names.join(';');
// // let string = names.join('');

// // let string = names.join(' ');

// let string = names.join(',');



// console.log(string);


//iterate the array

//array.forEach(function(item, index, array){

// })


// [10, 20, 30, 40].forEach(function (num) {
//     console.log(num * 2)
// })

//some method => checks if ar least one element in the array satisfies the given
//condition
//return true if the element is found 
//further iteration will stop if the element is found

// const numbers = [1, 2, 3, 4, 5];

// const hasEvenNumber = numbers.some((number) => number % 2 === 0);

// console.log(hasEvenNumber);


//every method => checks if all the elements matches the given condition
//iterates over elements and returns true only if all the elements meet a specific
//condition

// const numbers = [2, 4, 6, 8, 10];

// const hasEvenNumber = numbers.every((number) => number % 2 === 0);

// console.log(hasEvenNumber);

//toString()

//used to convert array into string representation

// const fruits = ['apples', 'bananas', 'oranges'];

// const fruitString = fruits.toString();

// console.log(fruitString)
