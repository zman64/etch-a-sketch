

const container = document.querySelector('.content--grid')
const colors = document.getElementById('colors')
const base = document.querySelector('#base');
const colorPicker = document.querySelector('#ColorInput');
const random = document.querySelector('#colors');
const background = document.querySelector('#background-color');
const clear = document.querySelector('#clear');
const gridSize = document.querySelector('#gridSize')
const button = document.querySelector('#square');
const body = document.querySelector('body');
const darken = document.querySelector('#darken');

let isDrawing = false;
let div = 0;
let divs = 0;
let number = 0;
let width = container.clientWidth / 16;
container.style.gridTemplateColumns = `repeat(16, 1fr)`

for (let i = 0; i < (16 * 16); i++) {
    div = document.createElement('div');
    div.style.backgroundColor = `${background.value}`
    // let height = container.clientHeight / 8;
    div.style.width = `${width}px`
    // div.style.height = `${height}px`
    div.classList.add('boxes')
    div.addEventListener('mouseenter', doAction, true)
    div.addEventListener('mousedown', doAction, true)
    container.appendChild(div)
    
}

container.addEventListener('mousedown', (e) => {
    e.preventDefault();
    // console.log(e)
    // e.stopPropagation();
    isDrawing = true;
}, true)

// container.addEventListener('mouseup', (e) => {
//     // console.log(e)
//     // e.preventDefault();
//     // e.stopPropagation();
//     isDrawing = false;
// }, true)

body.addEventListener('mouseup', (e) => {
    // console.log(e)
    // console.log(e)
    // e.preventDefault();
    // e.stopPropagation();
    isDrawing = false;
}, false)

button.value = 16;
gridSize.textContent = button.value;

// console.log(button)

function ranValue() {
    return Math.floor((Math.random() * 255) + 1);
}

function doAction(e) {
    // console.log(e)
    e.preventDefault()
    if (isDrawing){
    if (colors.classList.contains('colors')) {
        e.target.style.backgroundColor = `rgb(${ranValue()}, ${ranValue()}, ${ranValue()})`;
    } else if (base.classList.contains('base')) {
        e.target.style.backgroundColor = `blue`;
    } else {
        e.target.style.backgroundColor = `${colorPicker.value}`;
    }
}
}

// darken the color




// clear the grid
clear.addEventListener('click', (e) => {
   let divs = document.querySelectorAll('.boxes')

    divs.forEach(div => {
            div.style.backgroundColor = `${background.value}`
    })
})


// base color
base.addEventListener('click', (e) => {
    if (!e.target.classList.contains('base')) {
        e.target.classList.toggle('base')
    }
    colors.classList.remove('colors')
    colorPicker.classList.remove('color-picker')
    let divs = document.querySelectorAll('.boxes')
    divs.forEach(div => {
        div.style.backgroundColor = 'red'
    })
})



// random color 
random.addEventListener('click', (e) => {

    if (!e.target.classList.contains('colors')) {
        e.target.classList.toggle('colors');
    }
    base.classList.remove('base')
    colorPicker.classList.remove('color-picker')
    // let divs = document.querySelectorAll('.boxes')
    // divs.forEach(div => {
    //     div.style.backgroundColor = `${background.value}`
    // })
})

// console.log(colorPicker)

// color picker
colorPicker.addEventListener('click', (e) => {
    if (!e.target.classList.contains('color-picker')) {
        e.target.classList.toggle('color-picker')
    }
    base.classList.remove('base')
    colors.classList.remove('colors')
})

// background color
background.addEventListener('change', (e) => {
    // console.log(e)
    if (!e.target.classList.contains('background')) {
        e.target.classList.toggle('background')
    }
    // console.log(background)
    divs = document.querySelectorAll('.boxes')
    divs.forEach(div => {
        div.style.backgroundColor = `${background.value}`
    })
})

// Change grid size

button.addEventListener('change', (e) => {
    // console.log(e.target.value)
    // let number = prompt('Number of Square per Side?')
    // while (number > 100 || number < 0 || isNaN(number) || number === null) {
    //     number = prompt('Needs to be a number and between 1 & 100')
    // }
    number = e.target.value
    // let width = container.clientWidth / (number);
    // console.log(number)

    gridSize.textContent = number

    divs = document.querySelectorAll('.boxes')
    divs.forEach(function (div) {
        container.removeChild(div)
    })

    container.style.gridTemplateColumns = `repeat(${number}, 1fr)`
    
    // console.log(width)
    // console.log(number)
    for (let i = 0; i < (number * number); i++) {
        div = document.createElement('div');
        div.style.backgroundColor = `${background.value}`
        // div.style.width = `${width}px`
        div.addEventListener('mouseenter', doAction)
        div.addEventListener('mousedown', doAction, true)
        div.classList.add('boxes')
        container.appendChild(div)
    }

})

