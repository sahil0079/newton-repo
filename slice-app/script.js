const boxesContainer = document.getElementById('box-container');

const button = document.getElementById('button');

button.addEventListener('click', () => boxesContainer.classList.toggle('big'))


function createBoxes() {

    for (let i = 0; i < 4; i++) {

        for (let j = 0; j < 4; j++) {
            const signleBox = document.createElement('div')
            signleBox.className = 'box'
            signleBox.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`
            boxesContainer.append(signleBox)
        }
    }
}
createBoxes()