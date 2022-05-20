
const container = document.querySelector('.content--grid')
const colors = document.getElementById('colors')
// const base = document.querySelector('#base');
const colorPicker = document.querySelector('#ColorInput');
const random = document.querySelector('#colors');
const background = document.querySelector('#background-color');
const clear = document.querySelector('#clear');
const gridSize = document.querySelector('#gridSize')
const button = document.querySelector('#square');
const body = document.querySelector('body');
const darken = document.querySelector('#darken');
const lighten = document.querySelector('#lighten')

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
    isDrawing = false;
}, false)

button.value = 16;
gridSize.textContent = button.value;

// console.log(button)

function ranValue() {
    return Math.floor((Math.random() * 255) + 1);
}
let r;
let g;
let b;

function doAction(e) {
    // console.log(e)
    e.preventDefault()
    if (isDrawing) {
        if (colors.classList.contains('colors')) {
            e.target.style.backgroundColor = `rgb(${ranValue()}, ${ranValue()}, ${ranValue()})`;

            // } else if (base.classList.contains('base')) {
            //     e.target.style.backgroundColor = `rgb(159, 211, 199)`;
        } else if (darken.classList.contains('darken')) {

            var Color = e.target.style.backgroundColor.split(',')
            // console.log(Color)
            if (Color[0].includes('a')) {
                r = parseInt(Color[0].slice(5).trim());
            } else {
                r = parseInt(Color[0].slice(4).trim());
            }
            g = parseInt(Color[1].trim());
            if (Color[2].includes(')')) {
                b = parseInt(Color[2].slice(0, -1).trim());
            } else {
                b = parseInt(Color[2].trim());
            }

            // console.log(r, g, b)
            // console.log(r,g,b)
            var HexColor = rgbToHex(r, g, b)
            // console.log(HexColor);

            // console.log(typeof e.target.style.backgroundColor.toString())
            var hexcolor = LightenColor(HexColor, -10)
            console.log(hexcolor);
            if (hexcolor.length === 5) {
                // console.log(hexcolor.slice(1, -1));
                hexcolor = hexcolor.slice(1, -1).split('').map(function (hex) {
                    return hex + hex;
                }).join('');
                hexcolor = "#" + hexcolor
            }
            
            e.target.style.backgroundColor = hexcolor;
            // console.log(e.target.style.backgroundColor)
        }
        else if (lighten.classList.contains('lighten')) {
             var Color = e.target.style.backgroundColor.split(',')
            // console.log(Color)
            if (Color[0].includes('a')) {
                r = parseInt(Color[0].slice(5).trim());
            } else {
                r = parseInt(Color[0].slice(4).trim());
            }
            g = parseInt(Color[1].trim());
            if (Color[2].includes(')')) {
                b = parseInt(Color[2].slice(0, -1).trim());
            } else {
                b = parseInt(Color[2].trim());
            }

            // console.log(r, g, b)
            // console.log(r,g,b)
            var HexColor = rgbToHex(r, g, b)
            // console.log(HexColor);

            // console.log(typeof e.target.style.backgroundColor.toString())
            var hexcolor = LightenColor(HexColor, 10)
            console.log(hexcolor);
            if (hexcolor.length === 5) {
                // console.log(hexcolor.slice(1, -1));
                hexcolor = hexcolor.slice(1, -1).split('').map(function (hex) {
                    return hex + hex;
                }).join('');
                hexcolor = "#" + hexcolor
            }
            
            e.target.style.backgroundColor = hexcolor;
            // console.log(e.target.style.backgroundColor)
        } else {
            e.target.style.backgroundColor = `${colorPicker.value}`;
        }
    }
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function LightenColor(color, percent) {
var num = parseInt(color.replace("#",""),16),
amt = Math.round(2.55 * percent),
R = (num >> 16) + amt,
B = (num >> 8 & 0x00FF) + amt,
G = (num & 0x0000FF) + amt;
return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
};

// darken the color
darken.addEventListener('click', (e) => {
    if (!e.target.classList.contains('darken')) {
        e.target.classList.toggle('darken')
    }
    colors.classList.remove('colors');
    colorPicker.classList.remove('color-picker');
    base.classList.remove('base');
    lighten.classList.remove('lighten')
})

// lighten the color
lighten.addEventListener('click', (e) => {
    if (!e.target.classList.contains('lighten')) {
        e.target.classList.toggle('lighten')
    }
    colors.classList.remove('colors');
    colorPicker.classList.remove('color-picker');
    base.classList.remove('base');
    darken.classList.remove('darken')
})


// clear the grid
clear.addEventListener('click', (e) => {
    divs = document.querySelectorAll('.boxes')
    //    console.log(background.value)
    // if (base.classList.contains('base')){
    //     divs.forEach(div => {
    //         div.style.backgroundColor = 'rgb(20, 45, 76)'
    //     })
    // } else {
    divs.forEach(div => {
        div.style.backgroundColor = `${background.value}`
    })
}
)


// base color
// base.addEventListener('click', (e) => {
//     if (!e.target.classList.contains('base')) {
//         e.target.classList.toggle('base')
//     }
//     darken.classList.remove('darken')
//     colors.classList.remove('colors')
//     colorPicker.classList.remove('color-picker')
//     lighten.classList.remove('lighten')
//     divs = document.querySelectorAll('.boxes')
//     divs.forEach(div => {
//         div.style.backgroundColor = 'rgb(20, 45, 76)'
//     })
// })



// random color 
random.addEventListener('click', (e) => {

    if (!e.target.classList.contains('colors')) {
        e.target.classList.toggle('colors');
    }
    // base.classList.remove('base')
    colorPicker.classList.remove('color-picker')
    darken.classList.remove('darken')
    lighten.classList.remove('lighten')
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
    // base.classList.remove('base')
    colors.classList.remove('colors')
    darken.classList.remove('darken')
    lighten.classList.remove('lighten')
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

