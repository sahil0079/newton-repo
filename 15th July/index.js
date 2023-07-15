// function display(data) {
//     console.log(data);
// }

// function printHello(){
//     console.log('Hello');
// }

// function blockFor400ms(){}

// setTimeout(printHello, 0000)

// const upcomingData = fetch('https://fb.com/feeds/1');

// upcomingData.then(display);

// blockFor400ms();
// console.log('I am first');


// function printHello() {
//     console.log('Hello');
// }


// var timeoutId = setTimeout(printHello, 2000);

// var intervalId = setInterval(printHello, 1000);

// console.log({ timeoutId, intervalId })

// clearTimeout(timeoutId);
// clearInterval(intervalId);


// let promise1 = new Promise();

// console.log(Promise)


// const upcomingData = fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((data) => console.log(data))



//inclass assignments
// Complete the function checkCanIVote

// Takes 2 arguments

// 1st argument time, which is the number of milliseconds after the function will resolve or reject

// Second argument is the age upon (also a number) which you will use to return the string based on logic mentioned below

// The function returns a promise, which will have 2 functions as arguments resolve and reject like any other promise.

// The resolve function should be called with the argument "You can vote" after x milliseconds if age is greater than or equal to 18

// The reject function should be called with the argument with "You can not vote" after x milliseconds if age less than 18

function checkCanIVote(time, age) {
    return new Promise(function (resolve, reject) {
        if (age >= 18) {
            setTimeout(function () {
                resolve('You can vote')
            }, time)
        } else {
            setTimeout(function () {
                reject('You can not vote')
            }, time)
        }
    })
}

checkCanIVote(2000, 25)
    .then((value) => console.log(value))
    .then(() => console.log('2 then called'))
    .then(() => console.log('3 then called'))
    .catch((error) => console.log(error))
    .finally(() => console.log('I will run in any case'))