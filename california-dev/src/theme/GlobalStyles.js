import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body {
  font-size: 62.5%;
  line-height: 1.6;
  position: relative;
  min-height: 100vh;
  min-height: -webkit-fill-available;
  height: -webkit-fill-available;
  width: 100vw;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: "Roboto Condensed";
}
*, *::before, *::after {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
  -webkit-box-sizing: inherit;
  -moz-box-sizing: inherit;
}
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
body, textarea {
  
  line-height: 1em;
  font-size: 1.6rem;
  margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  line-height: 1em;
}




`;
export default GlobalStyles;
