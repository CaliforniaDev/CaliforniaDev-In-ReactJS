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
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.color.tertiary};
  box-shadow: ${({ theme }) => theme.shadow.primary};
  padding: 2.4rem;
  gap: 2.4rem;

  .flex-container {
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    gap: 2.4rem;
    text-align: center;
  }
  .column {
    flex-direction: column;
  }
  .skills__col {
    flex-basis: 100%;
  }
  .img-wrapper {
    height: 6rem;
  }
  p {
    font-size: 2rem;
  }
`;

export const DevToolsContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2.4rem;
  .tool-item {
   
    background-color: #f7f7f7;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 0.8rem;
    line-height: 3.2rem;
    overflow: hidden;
    width: 150px;
    height: 150px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  }
  .tools-col__content > img {
    padding-top: 0.8rem;
    width: 50%;
    height: 50%;
  }
`;
