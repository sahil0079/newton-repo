

//pass by value and pass by reference

// const person = {
//     name: "John"
// }

// // person = {
// //     name: "Peter"
// // }

// person.name = 'Peter'
// console.log(person)


// let a = {} ;

// let b = {} ; 

// console.log(a == b)




//pass by value and pass by reference


//primitives or scalars => strings, numbers, booleans etc => passed by value
//objects => passed by reference



// let greeting = 'hello !';

// let message = greeting;

// //mesage and greetings are two independent variables each holding the same value
// // greeting = 'Hi'
// // console.log(greeting, message)

// console.log(greeting == message)

//Note => variable assigned to an object it does not stores the object but its address
//in the memory in other words reference to it

//user => memory address of the object

//nameplate => address of singhania

//newNameplate  = nameplate
//newNameplate => address of singhania





// let user = {
//     name: "John"
// }


// let user2 = user

// // user => address of {
// //     name: "John"
// // }


// // user2 => address of {
// //     name: "John"
// // }

// console.log(user == user2)
// console.log(user === user2)


//   //user => object address <= user2

//   user2.name = 'Peter';

//   console.log(user)



//Two objects are equal only if they are the same object


// let a = {};

// let b = a; //copy the reference

// //a => {} <= b

// console.log(a == b)
// console.log(a === b)




// let a = {};

// let b = {}; //copy the reference

// //in this case a => {} and b => {}, pointing to different objects address

// console.log(a == b)
// console.log(a === b)





// const person = {
//     name : 'john'
// }

// // person.name = 'Peter';
// // //the reference of person is same tahts y now error and its properties can change
// // console.log(person)


// //=here in this case the reference of person is changing therefore error
// person ={
//     name : 'john'
// }


//What if you want to duplicate object?


//shallow copy vs deep copy



// let person = {
//     name : 'john',
//     age: 25
// }
// //using spread operator
// let person2 = {...person}

// person2.name = 'Peter'
// console.log(person)


//nested object
// let person = {
//     name : 'john',
//     age: 25,
//     details: {
//         isProgrammer: true
//     }
// }

// let person2 = {...person}

// person2.name = "peter"

// person2.details.isProgrammer = false

// person


// let person = {
//     name : 'john',
//     age: 25,
// }

// let clone = {};

// for (let key in person){
//     clone[key] = person[key];
// }

// clone.name = 'Peter'

// console.log(person.name)


// let person = {
//     name : 'john',
//     age: 25,
// }

// let personClone = Object.assign({}, person);

// personClone


//Nested cloning or deep copying or structured cloning





// let person = {
//     name: 'john',
//     age: 25,
//     details: {
//         height: 180,
//         width: 60
//     }
// }
// //Creates a deep clone of an object.
// let personClone = structuredClone(person);

// console.log(person.details === personClone.details)

greetings()
//due to hosting fucntion declaration will be called first
//as it gets assigned memory in the memory creation phase
//whereas var one will be undefined

var greetings = function () {
    console.log('First Greetings')
}
//at this point var greetings has overwritten the previous greeting function
//so first greetings

greetings()

function greetings() {
    console.log('Second Greetings')
}

greetings()
//since there is only one greeting function left so first greeting