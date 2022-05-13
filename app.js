const container = document.querySelector('#container')
for(let i=0; i < 16; i++){
    let div = document.createElement('div');
    div.style.backgroundColor = 'red'
    let width = container.clientWidth / 2;
    div.style.width = `${width}px`
    div.classList.add('flex-grow-1','boxes')
    container.appendChild(div)
    div.addEventListener('mouseenter', (e) => {
        div.style.backgroundColor = 'blue'
    })
}

const button = document.querySelector('#button')

button.addEventListener('click', () => {
    let number = prompt('Number of Square per Side?')
})

