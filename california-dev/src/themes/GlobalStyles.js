import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle(props => {
  const { palette, typography } = props.theme;
  const { preferredColorScheme } = props;
  return css`
    :root {
      --nav-rail-width: 8rem;
      --mobile-nav-height: 8rem;
      --desktop-max-width: 1440px;
      --app-height: 100%;
    }

    .visually-hidden {
      position: absolute !important;
      height: 1px;
      width: 1px;
      overflow: hidden;
      clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
      clip: rect(1px, 1px, 1px, 1px);
      white-space: nowrap; /* keep from collapsing into non-existent space */
    }

    html,
    body {
      font-size: 62.5%;
      min-height: 100%;
      width: 100%;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      background-color: ${palette.surface};
      color: ${palette.onSurface};
      color-scheme: ${preferredColorScheme};
      margin: 0;
      padding: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    span,
    label {
      font-family: 'Roboto', sans-serif;
    }

    ul {
      font-size: 1.6rem;
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
      font-family: inherit;
      font-weight: inherit;
      line-height: inherit;
    }

    p {
      max-width: 75ch;
      ${typography.body.large};
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    fieldset {
      border: none; /* removes default border */
      padding: 0; /* removes default padding */
      margin: 0; /* removes default margin */
    }

    .full-height-element {
      height: 100vh; /* Fallback */
      height: 100dvh; /* Viewport Height */
      height: var(--app-height);
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

ul, ol, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
`;
