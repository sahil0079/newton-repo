
//rest parameters

// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(1))
// console.log(sum(1, 2))
// console.log(sum(1, 2, 3))


//these three dots literally means that gather the remaining parameters into an array
function totalSum(...args) {

    let total = 0;

    for (let arg of args) {
        // console.log(arg)
        total = total + arg;
    }

    return total;
}

// console.log(totalSum(1))
// console.log(totalSum(1, 2))
console.log(totalSum(1, 2, 3))



function mutipleFruits(fruitOne, fruitTwo, ...restFruits) {


    console.log(fruitOne, fruitTwo)
    console.log(restFruits)
}

mutipleFruits('apples', 'bananas', 'grapes', 'oranges')

