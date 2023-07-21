

import { css } from "styled-components";

// This code creates a media object that can be used to create media queries
// for different screen sizes. It also creates a padding property that can be
// used to set padding values in different components.


const BREAKPOINTS = {
  LARGE: 1200,
  DESKTOP: 992,
  TABLET: 768,
  PHONE: 576,
};

const PADDING_SIZES = {
  SMALL: "2.4rem", //24px
  MEDIUM: "10.4rem", //104px
  LARGE: "12.8rem", //128px
};

// 3. Create a media object
//    a. Use Object.keys() to get an array of breakpoint keys
//    b. Use reduce() to iterate over the keys and create a property for each
//       breakpoint in the media object
export const media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  // 4. Calculate the emSize of the breakpoint
  const emSize = BREAKPOINTS[label] / 16;
  // 5. Create a function to return a media query
  acc[label] = (...args) => {
    // 6. If the function is called with arguments
    if (args.length > 0) {
      // 7. Return a media query
      return css`
        @media (min-width: ${emSize}em) {
          ${css(...args)};
        }
      `;
    }
  };
  return acc;
}, {});

// 8. Add padding property to media object
media.padding = Object.keys(PADDING_SIZES).reduce((acc, label) => {
  acc[label] = PADDING_SIZES[label];
  return acc;
}, {});
