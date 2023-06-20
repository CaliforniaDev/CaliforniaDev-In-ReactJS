import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle((props) => {
  const { palette, typography } = props.theme;
  const { preferredColorScheme } = props;
  return css`
    :root {
      --nav-rail-width: 8rem;
    }
    
    @import url("https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap");
    html,
    body {
      font-size: 62.5%;
      line-height: 1.5;
      min-height: 100%;
      width: 100%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      scroll-behavior: smooth;
      font-family: "Roboto", sans-serif;
      background-color: ${palette.background};
      color: ${palette.onBackground};
      color-scheme: ${preferredColorScheme};
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    span,
    label {
      font-family: "Roboto", sans-serif;
    }
    ul {
      font-size: 1.6rem;
    }
    h1,
    h2,
    h3,
    h4 {
      font-family: "Lato", sans-serif;
      font-weight: 400;
    }

    h1 {
      font-size: 5.6rem;
    }

    h2 {
      font-size: 4rem;
    }

    h3 {
      font-size: 3.2rem;
    }

    h4 {
      font-size: 2.4rem;
    }

    span {
      font-size: inherit;
      line-height: inherit;
    }

    p {
      max-width: 75ch;
      ${typography.body.large};
    }
  `;
});

export const StylesReset = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  font-size: inherit;
  margin: 0;
  padding: 0;
  transition: background-color 0.3s ease-in-out;
}



body {
  min-height: 100vh;
}

img, picture, svg, video {
  display: block;
  max-width: 100%
}

input, textarea, button, select {
  font: inherit;
}
`;
