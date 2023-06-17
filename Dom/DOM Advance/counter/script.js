
//variables
let count = 0;

//select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

//functions


//event listeners

// console.dir(document)

btns.forEach(function (btn) {

    // console.log(btn)
    btn.addEventListener('click', function (event) {

        // console.log(event)
        const styles = event.target.classList;

        // console.log(styles)

        if (styles.contains('decrease')) {
            count--; //count = count - 1

        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0
        }

        if (count > 0) {
            value.style.color = 'green';
        }
        if (count < 0) {
            value.style.color = 'red';
        }
        if (count === 0) {
            value.style.color = 'black';
        }

        console.log(count)

        value.textContent = count;
    })
})

