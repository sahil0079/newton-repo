
//variables

const form = getElement('addForm');
const todoList = getElement('todos');
const filter = getElement('filter');
const todo = getElement('todo')

// console.log({ form, todoList, filter, todo })


//event listeners

//form submit
form.addEventListener('submit', addTodo)

//click event on delete

todoList.addEventListener('click', removeTodo)

//keyup
filter.addEventListener('keyup', filterTodos)





//functions

function addTodo(e) {
    e.preventDefault()

    if (todo.value == '') {
        alert('put a valid todo')
        return
    }
    //get the user input

    const newTodo = todo.value

    //create a new li element

    let li = document.createElement('li');

    //add the classes to li
    li.className = 'todo-item'

    // li.classList.add 

    //add newtodo to the li

    li.innerText = newTodo

    //create a delete button

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button delete';
    deleteButton.innerText = 'delete';

    li.append(deleteButton);
    todoList.append(li);
    todo.value = '';



}
function removeTodo(e) {

    console.log(e.target.parentElement)
    if (e.target.classList.contains('delete')) {
        let result = confirm('Are you sure?');

        if (result) {
            let li = e.target.parentElement
            todoList.removeChild(li)
        }
    }
    console.log(e.target.classList)
}
function filterTodos(e) {


    let searchText = e.target.value.toLowerCase()
    console.log(searchText)

    //get the list items

    let liItems = document.getElementsByTagName('li');

    //conver it into array

    Array.from(liItems).forEach((item) => {
        let todoName = item.firstChild.textContent;


        if (todoName.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'flex'
        } else {
            item.style.display = 'none'
        }
    })

    console.log(liItems)
}
function getElement(id) {
    return document.getElementById(id);
}