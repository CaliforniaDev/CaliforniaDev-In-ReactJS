import styled from "styled-components";
/**
 * ! SKILLS SECTION STYLED COMPONENTS
 */
export const Section = styled.section`
  z-index: -1;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  background-color: ${({ theme }) => theme.color.tertiary};
  padding: 0 1.6rem;
`;
