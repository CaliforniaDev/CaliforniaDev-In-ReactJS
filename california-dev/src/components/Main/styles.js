import styled, { css } from 'styled-components';

export const MainContainer = styled.main(({ theme: { palette, media } }) => {
  return css`
    overflow: hidden;

    .nav {
      display: none;
    }

    @media (min-width: ${media.device.tablet}) {
      margin-left: var(--nav-rail-width);
      .nav {
        display: flex;
      }
      .mobile-nav {
        display: none;
      }
    }
  `;
});
