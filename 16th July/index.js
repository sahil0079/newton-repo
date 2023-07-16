
// // const posts = [
// //     { heading: 'Post 1', message: 'Here is post 1' },
// //     { heading: 'Post 2', message: 'Here is post 2' },
// // ];


// // function getAllPosts() {

// //     setTimeout(function () {
// //         let result = '';

// //         posts.forEach((post, index) => {
// //             result += `<div>${post.heading}</div>`;
// //         })
// //         document.body.innerHTML = result;
// //     }, 1000);
// // }



// // function createPost(post) {
// //     return new Promise(function (resolve, reject) {
// //         // console.log({ resolve, reject })
// //         setTimeout(function () {
// //             posts.push(post);

// //             const error = false;

// //             if (!error) {
// //                 resolve();
// //             } else {
// //                 reject('Error: Something is wrong');
// //             }

// //         }, 2000);
// //     });

// // }

// // //callbacks
// // // createPost({ heading: 'Post 3', message: "Here is post 3" }, getAllPosts)

// // //using promises
// // // createPost({ heading: 'Post 3', message: "Here is post 3" }).then(getAllPosts).catch(function (error) { console.log(error) })


// // //async await

// // async function x() {
// //     await createPost({ heading: 'Post 3', message: "Here is post 3" });

// //     getAllPosts();
// // }

// // x()


// //promise.all


// // const promise1 = Promise.resolve("Hello World");

// const promise1 = Promise.reject("Error Rejected due to some reason");

// const promise2 = new Promise(function (resolve, reject) {
//     setTimeout(reject, 2000, 'Rejected')
// })


// // const promise2 = new Promise(function (resolve, reject) {
// //     setTimeout(reject, 2000, 'Bye everyone')
// // })
// const promise3 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json())


// Promise.all([promise1, promise2, promise3])
//     .then(function (values) {
//         console.log(values)
//     }).catch(error => console.log(error))





//Inclass Assignment



// Complete the function promiseMe
// Such that it takes a number as the first argument (time) and a string as the second argument(data).
// It returns a promise which resolves after time milliseconds and data is returned.

// Note:- You only have to implement the function, in the example it
// shows your implemented question will be run.


function promiseMe(time, data) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(data)
        }, time)
    })
}

console.log(promiseMe(1000, 'Hello world'))