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
    div.addEventListener('mouseenter', (e) => {
        div.style.backgroundColor = 'blue'
    })
}

const button = document.querySelector('#button')

button.addEventListener('click', () => {
    let number = prompt('Number of Square per Side?')
    while (number > 100 || number < 0) {
        number = prompt('Number is too high (accept only below 100)')
    }
    const divs = document.querySelectorAll('.boxes')
    divs.forEach(function (div) {
        container.removeChild(div)
    })
    for (let i = 0; i < (number*number); i++) {
        let div = document.createElement('div');
        div.style.backgroundColor = 'red'
        let width = container.clientWidth / (number);
        div.style.width = `${width}px`
        div.classList.add('flex-grow-1', 'boxes')
        container.appendChild(div)
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = 'blue'
        })
    }

})

