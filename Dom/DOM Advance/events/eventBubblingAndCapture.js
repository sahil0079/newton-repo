


const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

//event bubbling , false is optional
// document.addEventListener('click', () => {
//     console.log('document clicked');
// }, false)
// grandparent.addEventListener('click', () => {
//     console.log('grandparent clicked');
// }, false)

// parent.addEventListener('click', () => {
//     console.log('parent clicked');
// }, false)

// child.addEventListener('click', () => {
//     console.log('child clicked');
// }, false)

// //event capture
// document.addEventListener('click', () => {
//     console.log('document clicked');
// }, true)
// grandparent.addEventListener('click', () => {
//     console.log('grandparent clicked');
// }, true)

// parent.addEventListener('click', () => {
//     console.log('parent clicked');
// }, true)

// child.addEventListener('click', () => {
//     console.log('child clicked');
// }, true)

// document.addEventListener('click', () => {
//     console.log('document clicked');
// }, { capture: true })
// grandparent.addEventListener('click', () => {
//     console.log('grandparent clicked');
// }, { capture: true })

// parent.addEventListener('click', () => {
//     console.log('parent clicked');
// }, { capture: true })

// child.addEventListener('click', () => {
//     console.log('child clicked');
// }, { capture: true })



grandparent.addEventListener('click', () => {
    //it closes the popup
    console.log('grandparent clicked');
}, false)

parent.addEventListener('click', () => {
    //on click it takes u to a different page
    console.log('parent clicked');
}, false)

child.addEventListener('click', (e) => {
    //it is jsut changing the color of the child element
    console.log('child clicked');
    e.stopPropagation();
}, false)




