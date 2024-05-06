import { css } from 'styled-components';

// This code creates a media object that can be used to create media queries
// for different screen sizes. It also creates a padding property that can be
// used to set padding values in different components.

const BREAKPOINTS = {
  LARGE: 1200,
  DESKTOP: 992,
  TABLET: 768,
  tabletSmall: 600,
  PHONE: 576,
};

const BREAKPOINTS_NEW = {
  xlarge: `${1920 / 16}em`,
  large: `${1440 / 16}em`,
  desktop: `${1280 / 16}em`,
  tabletLarge: `${1024 / 16}em`,
  tablet: `${768 / 16}em`,
  tabletSmall: `${600 / 16}em`,
  phone: `${576 / 16}em`,
  phoneSmall: `${320 / 16}em`,
};

const PADDING_SIZES = {
  SMALL: '2.4rem', //24px
  MEDIUM: '10.4rem', //104px
  LARGE: '12.8rem', //128px
  XLARGE: '16rem', //160px
};

/**
 * ! Utility This function is deprecated and will be removed in future versions.
 */
// Create a media object
//    a. Use Object.keys() to get an array of breakpoint keys
//    b. Use reduce() to iterate over the keys and create a property for each
//       breakpoint in the media object
export const media = Object.keys(BREAKPOINTS).reduce((acc, label) => {
  // Calculate the emSize of the breakpoint
  const emSize = BREAKPOINTS[label] / 16;
  // Create a function to return a media query
  acc[label] = (...args) => {
    // If the function is called with arguments
    if (args.length > 0) {
      // Return a media query
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

media.device = BREAKPOINTS_NEW;
