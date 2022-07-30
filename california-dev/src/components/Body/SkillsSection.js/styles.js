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

export const ElevatedCard = styled.div`
  z-index: 1;
  margin-top: -5rem; // Creates slight offset from section
  border-radius: 1.6rem;
  display: block;
  height: auto;
  width: 100%;
  background-color: ${({theme}) => theme.color.tertiary};
  box-shadow: ${({theme}) => theme.shadow.button};

  .flex-container {
    display: flex;
    justify-content: center;
    gap: 1.6rem;
    border: 1px solid cyan;
    text-align: center;

  }
  .skills__col {
    flex-basis: 50%;
    border: 1px solid purple;
    padding: 1.6rem;
  }
  .img-wrapper {
    height: 6rem;
  }

`;
