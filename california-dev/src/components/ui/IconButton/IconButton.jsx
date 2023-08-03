import React, { forwardRef, isValidElement } from "react";
import PropTypes from "prop-types";
import {
  FilledBtn,
  TonalBtn,
  OutlinedBtn,
  DefaultIconBtn,
  TargetAreaWrapper,
} from "./IconButton.styles";

//ENUMS
const IconButtonVariants = {
  FILLED: "filled",
  TONAL: "tonal",
  OUTLINED: "outlined",
  DEFAULT: "default",
};

const IconButtonComponents = {
  [IconButtonVariants.FILLED]: FilledBtn,
  [IconButtonVariants.TONAL]: TonalBtn,
  [IconButtonVariants.OUTLINED]: OutlinedBtn,
  [IconButtonVariants.DEFAULT]: DefaultIconBtn,
};

export const IconButton = forwardRef(
  ({ variant, icon, children, ...props }, ref) => {
    const buttonIcon = children || icon;

    if (!buttonIcon || !isValidElement(buttonIcon)) {
      console.warn(
        "Please provide a valid SVG or image for this IconButton component."
      );
      return null;
    }

    const IconButtonComponent = IconButtonComponents[variant] || DefaultIconBtn;
    return (
      <TargetAreaWrapper className="target-area" ref={ref}>
        <IconButtonComponent {...props}>{buttonIcon}</IconButtonComponent>
      </TargetAreaWrapper>
    );
  }
);
IconButton.defaultProps = {
  variant: IconButtonVariants.DEFAULT,
};

IconButton.propTypes = {
  variant: PropTypes.oneOf([
    IconButtonVariants.FILLED,
    IconButtonVariants.TONAL,
    IconButtonVariants.OUTLINED,
    IconButtonVariants.DEFAULT,
  ]).isRequired,
  icon: PropTypes.node,
  children: PropTypes.node,
};
