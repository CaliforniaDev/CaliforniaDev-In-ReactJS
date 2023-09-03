import styled, { css } from 'styled-components';


export const StyledListContainer = styled.li(
  ({ theme: { palette, elevation, state, media }, bg }) => css`
    position: relative;
    flex-basis: 100%;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 1;
    flex-grow: 0;
    color: ${palette.onSurfaceVariant};
    ${elevation.surface.level1};
    ${elevation.shadow.level1};

    /**
    *! possible change surface theming to reduce complexity
     */
    &:hover {
      cursor: pointer;
      ${elevation.surface.level2};
      ${elevation.shadow.level2}; 
    }

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 15em;
      background-color: ${bg ? bg : palette.surfaceVariant};
      padding: 24px;
    }
    img,
    svg {
      max-width: 300px;
      min-width: 200px;
      object-fit: contain;
    }

    .card-info {
      padding: 24px;
    }

    @media (min-width: ${media.device.tabletSmall}) {
      flex-basis: calc((100% - 1.6rem) / 2);
    }

    @media (min-width: ${media.device.desktop}) {
      flex-basis: calc((100% - 3.2rem) / 3);
      /* margin-right: 1.6rem;
      &:nth-child(3n) {
        margin-right: 0;
      } */
    }
  `
);
