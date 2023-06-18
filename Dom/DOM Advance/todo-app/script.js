
//variables

const form = getElement('addForm');
const todoList = getElement('todos');
const filter = getElement('filter');
const todo = getElement('todo');


// console.log(form)





//event listeners

//form submit

form.addEventListener('submit', addTodo)

//click event on delete
todoList.addEventListener('click', removeTodo)

//keyup event on search

filter.addEventListener('keyup', filterTodos)





//functions

function getElement(id) {
    return document.getElementById(id)
}

function addTodo(e) {
    //preventing the page from reload
    e.preventDefault()
    // alert('submited')

    //if empty user input then give a popup

    if (todo.value == '') {
        alert('put a valid todo');
        return;
    }

    //get the user input
    const newTodo = todo.value;
    // alert(newTodo)

    //create a new li item

    let li = document.createElement('li');


    //add the classes to li

    li.className = 'todo-item';

    //add newtodo text into the li

    li.innerText = newTodo;

    //create a delete button

    let deleteButton = document.createElement('button');

    //add the same classes to the delete button

    deleteButton.className = 'delete-button delete'

    //add the text to the button

    deleteButton.innerText = 'delete';

    //append button to li

    li.appendChild(deleteButton);

    //append li to todolist

    todoList.appendChild(li);

    //make user input empty

    todo.value = '';


}

function removeTodo(e) {
    // console.log(e.target)
    if (e.target.classList.contains('delete')) {
        let result = confirm('Are you sure?');

        // alert(result)
        if (result) {
            console.log(e.target.parentElement)
            let li = e.target.parentElement;
            todoList.removeChild(li);
        }
    }
}

function filterTodos(e) {
    // alert('triggered')

    //convert it to lowercase

    let searchText = e.target.value.toLowerCase();
    console.log(searchText)

    //GET LIST ITEMS

    let listItems = document.getElementsByTagName('li');
    // console.log(listItems)

    //convert html collection into an array

    Array.from(listItems).forEach((item) => {
        console.log(item.firstChild.textContent)
        let todoName = item.firstChild.textContent;

        if (todoName.toLowerCase().indexOf(searchText) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    })


}

// 'Todo 1' == 'todo 1' || 'ToDo 1'

// 'todo 1' === 'todo 1'
//either make lowercase all both uppercase before comparing