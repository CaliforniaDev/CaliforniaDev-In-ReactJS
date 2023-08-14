import styled, { css } from "styled-components";

export const RadioInput = styled.input(
  ({ theme: { palette } }) => css`
    display: none;

    &:checked + span {
      border-color: ${palette.primary};

      &:after {
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: ${palette.primary};
      }
    }
  `
);

export const RadioLabel = styled.label(
  ({ theme: { palette, typography } }) => css`
    position: relative;
    padding-left: 40px; // Adjust this value as needed
    cursor: pointer;

    span {
      position: absolute;
      left: 0;
      height: 20px; // Adjust this value as needed
      width: 20px; // Adjust this value as needed
      border: 2px solid ${(props) => props.theme.palette.onSurfaceVariant};
      border-radius: 50%;
      transition: border-color 0.3s ease-in-out;
      &:after {
        transition: background-color 0.3s ease-in-out;
      }
    }
  `
);
