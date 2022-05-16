

const container = document.querySelector('#container')
const colors = document.getElementById('colors')
const base = document.querySelector('#base');
const colorPicker = document.querySelector('#ColorInput');
const random = document.querySelector('#colors');
const background = document.querySelector('#background-color');
const clear = document.querySelector('#clear');


for (let i = 0; i < (16 * 16); i++) {
    let div = document.createElement('div');
    if (background.classList.contains('background')) {
        div.style.backgroundColor = `${background.value}`
    } else {
        div.style.backgroundColor = 'white'
    }
    let width = container.clientWidth / 16;
    let height = container.clientHeight / 8;
    div.style.width = `${width}px`
    // div.style.height = `${height}px`
    div.classList.add('flex-grow-1', 'boxes', 'border1')
    container.appendChild(div)
    div.addEventListener('mouseenter', doAction)

}

function ranValue() {
    return Math.floor((Math.random() * 255) + 1);
}

function doAction(e) {

    if (colors.classList.contains('colors')) {
        e.target.style.backgroundColor = `rgb(${ranValue()}, ${ranValue()}, ${ranValue()})`;
    } else if (base.classList.contains('base')) {
        e.target.style.backgroundColor = `blue`;
    } else {
        e.target.style.backgroundColor = `${colorPicker.value}`;
    }
}


// clear the grid
clear.addEventListener('click', (e) => {
    let divs = document.querySelectorAll('.boxes')

    divs.forEach(div => {
        if (background.classList.contains('background')) {
            div.style.backgroundColor = `${background.value}`
        } else {
            div.style.backgroundColor = 'white'
        }
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

console.log(colorPicker)

// color picker
colorPicker.addEventListener('click', (e) => {
    if (!e.target.classList.contains('color-picker')) {
        e.target.classList.toggle('color-picker')
    }
    base.classList.remove('base')
    colors.classList.remove('colors')
})

// background color
background.addEventListener('input', (e) => {
    // console.log(e)
    if (!e.target.classList.contains('background')) {
        e.target.classList.toggle('background')
    }
    // console.log(background)
    let divs = document.querySelectorAll('.boxes')
    divs.forEach(div => {
        div.style.backgroundColor = `${background.value}`
    })
})

// Change grid size
const button = document.querySelector('#square');

button.addEventListener('click', () => {
    let number = prompt('Number of Square per Side?')
    while (number > 100 || number < 0 || isNaN(number) || number === null) {
        number = prompt('Needs to be a number and between 1 & 100')
    }
    let divs = document.querySelectorAll('.boxes')
    divs.forEach(function (div) {
        container.removeChild(div)
    })
    let width = container.clientWidth / (number);
    for (let i = 0; i < (number * number); i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'red'
        div.style.width = `${width}px`
        div.classList.add('flex-grow-1', 'boxes', 'border1')
        container.appendChild(div)
        div.addEventListener('mouseenter', doAction)
    }

})

