import styled from "styled-components";
/**
 * ! SKILLS SECTION STYLED COMPONENTS
 */
export const Section = styled.section`
  flex-direction: column;
  z-index: -1;
  position: relative;
  display: flex;
  justify-content: center;
  z-index: 1;
  padding: 0 1.6rem;
  gap: 1.6rem;
`;
/**
 * ! FIX  MARGIN TOP IF CHANGING BACK TO ORGINAL
 */
export const ElevatedCard = styled.div`
  z-index: 1;
  // margin-top: -5rem; // Creates slight offset from section 
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
    flex-direction: column;
    gap: 2.4rem;
    align-items: center;
  
    
  }
  .column {
    flex-direction: column;
  }
  .img-wrapper {
    height: 6rem;
  }
  .skills__col {
    display: inline-flex;
    align-items: center;
    gap: 2.4rem;
  }


`;

export const DevToolsContainer = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, 150px);
    justify-content: center;
    list-style: none;
    width: 100%;
    gap: 2.4rem;

  .tool-item {
    border-radius: 0.8rem;
    width: 150px;
    height: 150px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
    background-color: ${({theme}) => theme.color.onPrimary};
  }

  .flex-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
 
`;
