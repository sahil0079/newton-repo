

//we can pass arbitrary data to functions using parameters


function showMessage(user, message = 'Hey everyone') {

    console.log(user + ': ' + message)
}

showMessage('John', 'Hi there!')

showMessage('Peter')