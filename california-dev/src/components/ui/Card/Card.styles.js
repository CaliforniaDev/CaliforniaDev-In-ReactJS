import styled, { css } from 'styled-components';

export const StyledCard = styled.div(
  ({ theme: { palette, elevation, media }, $bg }) => css`
    position: relative;
    flex-basis: 100%;
    border-radius: 12px;
    overflow: hidden;
    flex-shrink: 1;
    flex-grow: 0;
    color: ${palette.onSurfaceVariant};
    background-color: ${palette.surfaceContainerLow};
    box-shadow: ${elevation.level1};
    cursor: pointer;

    &:hover {
      box-shadow: ${elevation.level2};
      .state-layer {
        background-color: ${palette.onSurface};
      }
    }

    .image-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      height: 15em;
      background-color: ${$bg ? $bg : palette.surfaceVariant};
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
