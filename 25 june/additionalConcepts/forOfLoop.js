


//for of loop


// objects , arrays, strings , maps, sets etc


// for(variable of iterable){

// }

// const numbers = [1,2,3,4,5];

// for (const number of numbers){
//     console.log(number)
// }

// const message = 'Hello world!'

// for(const char of message){
//     console.log(char)
// }


// const user = new Map();

// user.set("name", "John");

// user.set("age", 30);

// user.set("city", "london");


// console.log(user)

// for (const [key,value] of user){
//     console.log(`${key} ${value}`)
// }
let user = {
    name: 'Peter',
    age: 30,
    city: 'Delhi'
}

for (let key in user) {
    console.log(key, user[key])
}