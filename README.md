# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#stormFred)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://stormfred.github.io/Blogr-Landing-Page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

```css
I had not thought of starting with mobile first then desktop, seeing that I had to redo the design I learnt a lot.
  (i)==>>Using media qurries as the size increases and more components are added

      @media (min-width: 777px){
        ...
        .navigation {
        clip-path: margin-box;
        border-bottom-left-radius: 10rem;
      }
      ...
        .laptop {
        max-width: 100%;
        min-height: 3em;
        margin-top: 60em;
        }
      ...

      }

  (ii)==>> I now understood how to use positioning;
        ....container {
      position: relative;
      left: 0;
      right: 0;
      top: -1.2vh;
    }
      ...
      .pattern {
	  position: absolute;
    ...
      }
      ....

```

```js
    ==>> The take away lesson learnt was that, its posible also to hide and display dropmenu/div
    by using visibility property other than toggle a show/hide class

    ...
      function hideMenu() {
        closeBtn.addEventListener('click', () => {
          closeBtn.style.visibility = 'hidden';
          closeBtn.style.marginRight = '-3rem';
          hambuger.style.visibility = 'visible';
          mainMenu.style.visibility = 'hidden';
          info.style.visibility = 'visible';
        });
      }
  ...

```

- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
