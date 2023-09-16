import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {StateLayer} from 'components/ui/StateLayer';
import {
  FilledBtn,
  TonalBtn,
  OutlinedBtn,
  DefaultIconBtn,
  TargetAreaWrapper,
} from './IconButton.styles';

//ENUMS
const IconButtonVariants = {
  FILLED: 'filled',
  TONAL: 'tonal',
  OUTLINED: 'outlined',
  DEFAULT: 'default',
};

const IconButtonComponents = {
  [IconButtonVariants.FILLED]: FilledBtn,
  [IconButtonVariants.TONAL]: TonalBtn,
  [IconButtonVariants.OUTLINED]: OutlinedBtn,
  [IconButtonVariants.DEFAULT]: DefaultIconBtn,
};

export const IconButton = forwardRef(({ variant, children, ...props }, ref) => {
  // Use the provided variant, or use the default
  const IconButtonComponent = IconButtonComponents[variant] || DefaultIconBtn;
  return (
    // Wrap the button in a div to provide a "target area" for the tooltip
    <TargetAreaWrapper className="target-area" ref={ref}>
      <IconButtonComponent {...props}>
        <StateLayer className="state-layer" />
        <span className="icon-wrapper">{children}</span>
        </IconButtonComponent>
    </TargetAreaWrapper>
  );
});
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
  children: PropTypes.node.isRequired,
};
