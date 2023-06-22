const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
})
// write your code here

const firstDiv = document.querySelector(".first-div");
const secondDiv = document.querySelector(".second-div");
let output = document.querySelector(".output");

firstDiv.addEventListener("click", () => {
    output.innerText += "first div called";
});

secondDiv.addEventListener("click", (e) => {
    // write your code here
    output.innerText += "second div called -- ";

    e.stopPropagation()

});