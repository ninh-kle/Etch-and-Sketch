const container = document.querySelector('#container')
const clearButton = document.querySelector('#clearGrid')
const rainbowButton = document.querySelector('#rainbow')

let colorSwitch = false;

function createGrid(rows, columns) {
    let totalSquares = rows * columns;
    for (let i = 0; i < totalSquares; i++) {
        let box = document.createElement('div')
        box.classList.add('box')
        box.addEventListener('mouseover', () => color(box));
        container.style.setProperty('grid-template-columns', `repeat(${columns}, 2fr)`);
        container.style.setProperty('grid-template-rows', `repeat(${rows}, 2fr)`);
        container.appendChild(box);
    }
}

createGrid(16, 16)

function color(box) {
    let r = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    if (colorSwitch === true) {
        box.classList.remove('black');
        box.style.setProperty('background-color', `rgb(${r},${g},${b})`);
    } else {
        box.classList.add('black');
    }
}

function clearGrid(gridSize = 16) {
    container.innerHTML = '';
    gridSize = parseInt(prompt('How big do you want your grid: 1 - 100'))
    if (gridSize > 100) {
        alert("That's too big!")
        gridSize = 16;
    } else if (gridSize < 0) {
        gridSize = 16;
    }
    createGrid(gridSize, gridSize)
    colorSwitch = false;
}

function rgbSwitch() {
    colorSwitch = true;
}

clearButton.addEventListener('click', clearGrid)
rainbowButton.addEventListener('click', rgbSwitch)