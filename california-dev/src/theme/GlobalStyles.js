import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap');
html, body {
  font-size: 62.5%;
  line-height: 1.5;
  position: relative;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  height: -webkit-fill-available;
  width: 100%;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: 'Roboto', sans-serif;
  background-color: ${({theme}) => theme.color.secondary};
  color: ${({theme}) => theme.color.onSecondary}
}
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
}
body, textarea {
  font-size: 1.6rem;
}

span, label {
  font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4 {
  font-family: 'Lato', sans-serif;
  font-weight: 400;
}

h1 {
  font-size: 5.6rem;
}

h2 {
  font-size: 4.0rem;

}

h3 {
  font-size: 3.2rem;

}

h4 {
  font-size: 2.4rem;

}

span {
  font-size: inherit
  line-height: inherit;
}

p {
  max-width: 75ch;
}
`;


export const NormalizeStyles = createGlobalStyle`
* 1. Change the font styles in all browsers.
* 2. Remove the margin in Firefox and Safari.
*/

button,
input,
optgroup,
select,
textarea {
 font-family: inherit; /* 1 */
 font-size: 100%; /* 1 */
 line-height: 1.15; /* 1 */
 margin: 0; /* 2 */
}
` 

