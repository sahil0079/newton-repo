//Switch case statement 


let key = prompt('Press the key to move');

// if (key === 'w') {
//     console.log('move up')
// }

// if (key === 'a') {
//     console.log('move left')
// }

// if (key === 'd') {
//     console.log('move right')
// }

// if (key === 's') {
//     console.log('move down')
// }

// switch (key) {
//     case 'w':
//         console.log('move up');
//         break
//     case 'a':
//         console.log('move left');
//         break
//     case 'd':
//         console.log('move right');
//         break
//     case 's':
//         console.log('move down');
//         break
//     default:
//         break
// }

switch (key) {
    case 'w':
    case 'a':
    case 'd':
        console.log('move up');
        break
    case 's':
        console.log('move down');
        break
    default:
        break
}