
# Etch-A-Sketch: A Basic Sketching App

This is a solution to the Odin Project Fundamentals Project: Etch-A-Sketch
Browser version of a sketchpad.
Create your own pixel art.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- Select any colour for the pen or background.
- Apply shading / lightening (10%)
- Erase a single pixel and clear entire pixel art
- Use random colors
- Change grid size up to 60x60 grid

### Screenshot

![Website](https://raw.githubusercontent.com/zman64/etch-a-sketch/main/Etch-A-Sketch-Website.png "A Dude")

### Links

- Solution URL: [Live Website](https://zman64.github.io/etch-a-sketch/)

## My process

### Built With

- HTML5 Markup
- CSS
- Flexbox
- CSS Grid
- Javascript

### What I Learned

Default value for color and proper class naming

```html
<input type="color" class="input__button" name="" id="ColorInput" value="#FFFFFF">

<label for="ColorInput"class="input__label">Color picker</label>
```

Make caret-color property transparent to hide vertical line cursor on screen

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    caret-color: transparent;
}
```

Assign doAction function to eventListeners to handle color assignment to mouse events

```js
  div.classList.add('boxes')
    div.addEventListener('mouseenter', doAction, true)
    div.addEventListener('mousedown', doAction, true)
    container.appendChild(div)
```

### Continued Development

- Add graphic red etch-a-sketch image to grid
- Would need to learn more about graphic design using gimp

- Style the buttons and make them cleaner

### Useful Resources

- [How to shade colors](https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors)

## Author

- Zachary Kahlig

## Acknowledments

- Inspiration came from being apart of the Odin Project and using their resourses.

![Example_Guy_Etch](https://raw.githubusercontent.com/zman64/etch-a-sketch/main/Example_Guy_Etch.png "A Dude")
