import styled from "styled-components";

export const SkillFigure = styled.figure`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.color.tertiary};
 
  width: 33.33%;

  img {
    height: 16rem;
  }
`
export const SkillCard = styled.div`
  background-color: ${({theme}) => theme.color.tertiary};
  height: 300px;
  width: 100%;

`

export const FlexWrapper = styled.div`
  display: flex;
  gap: 1.6rem;
 
`