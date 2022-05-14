

const container = document.querySelector('#container')

for (let i = 0; i < (16*16); i++) {
    let div = document.createElement('div');
    div.style.backgroundColor = 'red'
    let width = container.clientWidth / 16;
    let height = container.clientHeight / 8;
    div.style.width = `${width}px`
    // div.style.height = `${height}px`
    div.classList.add('flex-grow-1', 'boxes')
    container.appendChild(div)
    div.addEventListener('mouseenter', doAction)
    
}

function ranValue() {
    return Math.floor((Math.random() * 255) + 1);
}

function doAction(e) {
    
    if (document.getElementById('colors').onclick == true){
        e.target.style.backgroundColor = `rgb(${ranValue()}, ${ranValue()}, ${ranValue()})`;
    } else {
        e.target.style.backgroundColor = `blue`;
    }
}

const clear = document.querySelector('#clear');

clear.addEventListener('click', (e) => {
    let divs = document.querySelectorAll('.boxes')

    divs.forEach(div => {
       div.style.backgroundColor = 'red'
})
})

const base = document.querySelector('#base');

base.addEventListener('click', (e) => {
    let divs = document.querySelectorAll('.boxes')

    divs.forEach(div => {
       div.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = `blue`;
       })
    })
})




const random = document.querySelector('#colors')
random.addEventListener('click', (e) => {

    let divs = document.querySelectorAll('.boxes')

    divs.forEach(div => {
       div.style.backgroundColor = 'red'
       div.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = `rgb(${ranValue()}, ${ranValue()}, ${ranValue()})`;
       })
    })
})


// Number of Squares
const button = document.querySelector('#square');

button.addEventListener('click', () => {
    let number = prompt('Number of Square per Side?')
    while (number > 100 || number < 0 || isNaN(number) || number === null ) {
        number = prompt('Needs to be a number and between 1 & 100')
    }
    let divs = document.querySelectorAll('.boxes')
    divs.forEach(function (div) {
        container.removeChild(div)
    })
    let width = container.clientWidth / (number);
    for (let i = 0; i < (number*number); i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'red'
        div.style.width = `${width}px`
        div.classList.add('flex-grow-1', 'boxes')
        container.appendChild(div)
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = `blue`;
        })
    }

})

