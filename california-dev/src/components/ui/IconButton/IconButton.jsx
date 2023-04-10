import {
  FilledBtn,
  TonalBtn,
  OutlinedBtn,
  DefaultIconBtn,
  TargetAreaWrapper,
} from "./styles";
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

export function IconButton({ variant, icon, children, ...props }) {

  const buttonIcon = children || icon;

  if (!buttonIcon) {
    console.warn("Please provide an icon for this IconButton component.");
  }

  const IconButtonComponent = IconButtonComponents[variant] || DefaultIconBtn;

  return (
    <TargetAreaWrapper>
      <IconButtonComponent {...props}>{buttonIcon}</IconButtonComponent>
    </TargetAreaWrapper>
  );
}
