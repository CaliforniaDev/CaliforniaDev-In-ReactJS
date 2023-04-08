import styled, { css } from 'styled-components';
import { ElevatedBtn } from 'components/ui/Button/styles';

export const StyledSection = styled.section(({ theme: { palette, typography } }) => {
  return css`
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
  .display {
    ${typography.display.medium}
  }

  .headline {
    ${typography.headline.medium}
  }

  .accent-color {
    color: ${palette.secondary};
  }

  .link-items-container {
    display: flex;
    gap: 1.6rem;
    align-items: center;
  }
  .social-links {
    display: flex;
    gap: 1.6rem;
  }
  `
});