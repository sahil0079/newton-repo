


console.dir(document)

// console.dir(document.URL)
// console.dir(document.domain)

document.title = 'abcde';

// // console.dir(document.body);
// console.dir(document.head);


// console.log(document.all[4])

//adding text

// const body = document.body;

// body.append('hello', 'bye everyone')

// body.appendChild('hello')
//appendChild cannot add text


//selecting body
// const body = document.body;

// //creating a new element
// const div = document.createElement('div');

// //add text to the element

// // div.innerText = 'Javascript'
// div.textContent = 'Javascript'



// body.append(div)

// body.appendChild(div)

// console.log(div)


//DOM Selectors
//different ways of selecting an element from the DOM

// const div = document.querySelector('div');


// console.log(div.innerText)
// console.log(div.textContent)



// const body = document.body;

// const div = document.createElement('div');


// div.innerText = '<strong> Hello world  </strong>';

// const strong = document.createElement('strong');

// strong.innerText = 'Hello world ';

// div.appendChild(strong);

// div.innerHTML = '<strong><p> Javascript is pretty cool </p> </strong>'


// body.appendChild(div);


//removing the elements



const div = document.querySelector('div');

const spanOne = document.getElementById('one');
const spanTwo = document.getElementById('two');

// // spanTwo.remove();

// div.removeChild(spanOne);

// attributes methods and properties

// console.log(spanOne.getAttribute('name'));

// spanOne.setAttribute('name', 'abcde');

// spanOne.removeAttribute('name');

// spanOne.id = 'bdhcusdhshuhkj';



//classes methods and properties


// spanTwo.classList.add('new-class');
// spanTwo.classList.remove('new-class');

spanTwo.className = 'new-name';
spanTwo.className = 'new-name2 a b c d e';


// spanOne.classList.toggle('new-class');

//style

// spanOne.style.color = 'tomato';
// spanTwo.style.backgroundColor = 'green';









