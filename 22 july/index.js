//Polyfills

// //customInclude => searches fr element and returns boolean


// console.log(Array.prototype.customInclude)

// if (!Array.prototype.customInclude) {
//     Array.prototype.customInclude = function (element) {
//         for (let i = 0; i < this.length; i++) {

//             if (this[i] === element) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }


// const nums = [10, 20, 30, 40];
// console.log(nums.customInclude(20))


//promise.all() is a static method

//it takes number of promises as arrays and returns a single promise
//returned promise is fulfilled when all promises are fullfilled,
//even if u pass empty iterable
// it rejects when any pf the promises is rejected with the first rejection error
//the results are returned in the same order as the promises are passed in the given
//array

// const promise1 = Promise.resolve(10);
const promise1 = Promise.reject('promise 1 rejected ');

const promise2 = Promise.reject('promise 1 rejected');

// const promise2 = Promise.resolve(100);
const promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'hello')
})

const arrayOfTasks = [promise1, promise2, promise3];

async function promiseAll(arrayOfTasks) {

    let result = [];
    let promisesCompleted = 0;

    return new Promise(function (resolve, reject) {

        for (let index in arrayOfTasks) {

            arrayOfTasks[index].then(function (res) {
                result[index] = res;
                promisesCompleted++;

                if (promisesCompleted == arrayOfTasks.length) {
                    resolve(result);
                }


            }).catch(function (error) {
                reject(error)
            })
        }

    })

}


promiseAll(arrayOfTasks)
    .then(function (value) {
        console.log('value', value)
    })

Promise.all(arrayOfTasks).then(function (result) {
    console.log('result', result)
})