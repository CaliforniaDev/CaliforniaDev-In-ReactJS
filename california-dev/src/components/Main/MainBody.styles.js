import styled, { css } from 'styled-components';

export const MainContainer = styled.main(({ theme: { palette, media } }) => {
  return css`
    overflow: hidden;

    @media(min-width: ${media.device.tablet}) {
      margin-left: var(--nav-rail-width);
    }
  `;
});
