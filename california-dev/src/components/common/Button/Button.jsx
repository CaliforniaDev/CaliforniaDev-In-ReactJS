import {
  DefaultBtn,
  ElevatedBtn,
  FilledBtn,
  TonalBtn,
  OutlinedBtn,
} from "./styles";

// ENUMS
const ButtonVariants = {
  FILLED: "filled",
  ELEVATED: "elevated",
  TONAL: "tonal",
  OUTLINED: "outlined",
  DEFAULT: "default",
};

const ButtonComponents = {
  [ButtonVariants.FILLED]: FilledBtn,
  [ButtonVariants.ELEVATED]: ElevatedBtn,
  [ButtonVariants.TONAL]: TonalBtn,
  [ButtonVariants.OUTLINED]: OutlinedBtn,
  [ButtonVariants.DEFAULT]: DefaultBtn,
};

export function Button({ variant, text, children, ...props }) {
  const buttonLabel = children || text;

  if (!buttonLabel) {
    console.warn("Please provide a label for this Button component.");
  }

  const ButtonComponent = ButtonComponents[variant] || DefaultBtn;

  return <ButtonComponent {...props}>{buttonLabel}</ButtonComponent>;
}
Button.defaultProps = {
  variant: ButtonVariants.DEFAULT,
};
