# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [Github](https://github.com/kwonmoon/single-page-developer-portfolio)
- Live Site URL: [Netlify]()

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Javascript

### What I learned

I was struggling to position rings to the correct position. Finally I figured out to attach rings to the roots of the each section and container at the same time so the rings move with the container.
Also, in the form section, the forms input field was overridden by browser's autofill. I found the solution from W3docs. See the Useful resources.

```css
input:-webkit-autofill {
   -webkit-box-shadow: 0 0 0 1000px hsl( var(--color-dark-grey) ) inset;
   -webkit-text-fill-color: hsl( var(--color-grey) );
}
```

### Useful resources

- [W3docs](https://www.w3docs.com/snippets/html/how-to-disable-browser-autocomplete-and-autofill-on-html-form-and-input-fields.html) - This helped me to prevent browser default background color.

- [Font Awesome](https://fontawesome.com/v4/icon/exclamation-circle) - This helped me to get exclamation circle used in input validation.


## Author

- Frontend Mentor - [@kwonmoon](https://www.frontendmentor.io/profile/kwonmoon)

## Acknowledgments

- chatGPT and Google