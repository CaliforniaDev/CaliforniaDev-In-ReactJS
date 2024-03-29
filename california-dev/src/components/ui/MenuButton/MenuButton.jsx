import React from 'react';
import { ButtonWrapper, Line } from './MenuButton.styles';
export const MenuButton = ({ className }) => {
  return (
    <ButtonWrapper className={className}>
      <Line width="3.2rem" />
      <Line width="2.0rem" />
      <Line width="1.6rem" />
    </ButtonWrapper>
  );
};
