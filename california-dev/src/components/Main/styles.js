import styled, { css } from 'styled-components';

export const MainContainer = styled.main(({ theme: { palette, media } }) => {
  return css`
    overflow: hidden;
    margin-top: var(--mobile-nav-height);

    @media(min-width: ${media.device.tablet}) {
      margin-left: var(--nav-rail-width);
      margin-top: 0;
    }
  `;
});
