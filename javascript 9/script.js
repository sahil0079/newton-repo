

// let user = {name : "John"};

// let user2 = user;


// console.log(user == user2)
// console.log(user === user2)


// let a = {};

// let b = {};

// //independent objects

// console.log(a == b)
// console.log(a == b)


const people = [{ name: 'Punit' }, { name: 'Sanyog' }];


const peopleWithS = people.filter((person) => person.name.startsWith('S'));

peopleWithS

peopleWithS[0].name = 'Neetu';
peopleWithS

people



//pass by value
let number = 100;

let numberCopy = number;

number = 200
numberCopy