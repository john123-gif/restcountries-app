## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## The challenge

1. View the optimal layout for the site depending on their device's screen size
2. See all countries from the API on the homepage
3. Search for a country using an input field
4. Filter countries by region
5. Click on a country to see more detailed information on a separate page
6. Click through to the border countries on the detail page
7. Toggle the colour scheme between light and dark mode


## Links

- Solution URL: https://github.com/john123-gif/restcountries-app
- Live Site URL: https://sparkly-palmier-374423.netlify.app


## My process

I developed this rest countries api application using React, Redux & TypeScript.

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- [Redux](https://redux.js.org/) - React framework

### What I learned

Learnt alot from this project. For starters, I got to understand React and how to implement it, as it helps to reuse codes. Redux provides global accessibility of component data(state) and in conjunction with reduxtoolkit make it easy to manage.

To see how you can add code snippets, see below:

```React
import './load.css'

export const Loader = () => {
    return(
        <div className="load-row">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}
```
```css
input[type="search"]{
    font-size: 14px;
    color: hsl(0, 0%, 52%);
    border: none;

}
```
```redux(reduxtoolkit)
const initialState = "";

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => state = action.payload
    }

});
```
```ts
export const selectSearchTerm = (state: RootState) => state.search;
```


### Continued development
-React
-Redux (Reduxtoolkit)
-Extensive use of API


### Useful resources
-[Codecademy] - Codecademy basically provided me with the entire knowledge needed to engineer this project(HTML, CSS, JavaScript, React and Redux). It's a great platform for learning.

- [Developer Moxilla](https://www.developer.mozilla.org.com) - This site has an extensive interpretation of javaScript which helped me understand how to implement some concept in my project.

- [Youtube](https://www.youtube.com) - I watched some example videos on how other developers develop thier project      using redux.

- [uiverse](http://www.uiverse.io) - Provides countless open source UI element forany project.



## Author
-LinkedIn - [teyejohn](https://www.linkedin.com/in/teyejohn)
-Github - [teyejohn](https://github.com/john123-gif)
- Frontend Mentor - [@teyejohn](https://www.frontendmentor.io/profile/@teyejohn)
# Rest-Countries-API-App
