

// console.dir(window)


const btn = document.querySelector('button');


function random(number) {

    return Math.floor(Math.random() * (number + 1))
}


btn.addEventListener("mouseleave", () => {
    // alert('clicked')
    const randomColor = `rgb(${random(255)},${random(255)},${random(255)})`

    console.log(randomColor)
    document.body.style.backgroundColor = randomColor;
})