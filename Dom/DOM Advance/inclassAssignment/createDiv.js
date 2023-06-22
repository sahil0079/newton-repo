
// Write a JavaScript function createDiv(width, height, text) that creates and adds a new div element inside the #container div with the specified width and height. The div element should have text as its text content.

// Note: Do not modify the HTML code

// Note: width and height which are passed as arguments to the createDiv function do not contain the unit. Make sure to add the unit of "px" to it before setting the values


function createDiv(width, height, text) {

    //create an element

    let divElement = document.createElement('div');


    // add specified width and height. 

    divElement.style.width = `${width}px`;
    divElement.style.width = `${height}px`;

    //adding the text here
    divElement.textContent = text;


    let container = document.querySelector('#container');

    //append the new div into the container

    container.appendChild(divElement);

}

createDiv(200, 100, "Hello World!")