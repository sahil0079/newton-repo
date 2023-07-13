

//ecommerce website 


//getOrder  1000ms

//goToCheckout 500ms

//proceedToPayment 1000ms



//print the  numbers after each second

//callback hell
// setTimeout(function(){
//     console.log('Task 1')
//     setTimeout(function(){
//         console.log('Task 2')
//         setTimeout(function(){
//             console.log('Task 3')
//             setTimeout(function(){
//                 console.log('Task 4')
//                 setTimeout(function(){
//                     console.log('Task 5')

//                 }, 1000)

//             }, 1000)

//         }, 1000)

//     }, 1000)

// }, 1000)


//task 2 is dependent on task 1 and it also takes 1 sec




function addToCart(productId, callback) {

    setTimeout(() => {
        console.log('added to cart');
        callback();


    }, 1000)


}

function proceedToCheckout(cartId) {
    setTimeout(() => console.log('proceeding to checkout'), 1000)
}

addToCart(2, proceedToCheckout)




function display(data) {
    console.log(data);
}

const upcomingData = fetch('https://fb.com/feeds/1');

upcomingData.then(display);

console.log('I am first');


