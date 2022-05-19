

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
    if (isDrawing) {
        if (colors.classList.contains('colors')) {
            e.target.style.backgroundColor = `rgb(${ranValue()}, ${ranValue()}, ${ranValue()})`;

            // } else if (base.classList.contains('base')) {
            //     e.target.style.backgroundColor = `rgb(159, 211, 199)`;
        } else if (darken.classList.contains('darken')) {
            if (e.target.style.backgroundColor.includes("#")) {
                var NColor = LightenDarkenColor(e.target.style.backgroundColor, -20)
                e.target.style.backgroundColor = NColor;
                console.log(NColor)
            } else {
                var Color = e.target.style.backgroundColor.split(',')
                // console.log(Color)
                let r = parseInt(Color[0].slice(4).trim());
                // if (Color[2].slice(-1) === ')') {
                let b = parseInt(Color[2].slice(0, -1).trim());
                // } else {

                // }
                let g = parseInt(Color[1].trim());
                console.log(r, g, b)
                // console.log(r,g,b)
                var HexColor = rgbToHex(r, g, b)
                // console.log(HexColor)
                console.log(typeof e.target.style.backgroundColor.toString())
                var NewColor = LightenDarkenColor(HexColor, -20)
                console.log(NewColor)
                e.target.style.backgroundColor = NewColor;
                console.log(e.target.style.backgroundColor)


                // console.log(NewColor)
                // var rColor = hexToRgb(NewColor).r;
                // var gColor = hexToRgb(NewColor).g;
                // var bColor = hexToRgb(NewColor).b;

                // e.target.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
            }
        } else if (lighten.classList.contains('lighten')) {
            // console.log(e.target.style.backgroundColor)
            var Color = e.target.style.backgroundColor.split(',')
            let r = parseInt(Color[0].slice(4).trim());
            let b = parseInt(Color[2].slice(0, -1).trim());
            let g = parseInt(Color[1].trim());
            // console.log(r,g,b)
            var HexColor = rgbToHex(r, g, b)
            NewColor = newShade(HexColor, 25);
            var rColor = hexToRgb(NewColor).r;
            var gColor = hexToRgb(NewColor).g;
            var bColor = hexToRgb(NewColor).b
            e.target.style.backgroundColor = `rgb(${rColor}, ${gColor}, ${bColor})`;
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

const newShade = (hexColor, magnitude) => {
    hexColor = hexColor.replace(`#`, ``);
    if (hexColor.length === 6) {
        const decimalColor = parseInt(hexColor, 16);
        let r = (decimalColor >> 16) + magnitude;
        r > 255 && (r = 255);
        r < 0 && (r = 0);
        let g = (decimalColor & 0x0000ff) + magnitude;
        g > 255 && (g = 255);
        g < 0 && (g = 0);
        let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
        b > 255 && (b = 255);
        b < 0 && (b = 0);
        return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
    } else {
        return hexColor;
    }
};

function LightenDarkenColor(col, amt) {

    var usePound = false;

    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

}

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

