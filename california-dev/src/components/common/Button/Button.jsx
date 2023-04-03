import {
  DefaultBtn,
  ElevatedBtn,
  FilledBtn,
  TonalBtn,
  OutlinedBtn,
} from "./styles";

// ENUMS
const ButtonConfig = {
  FILLED: "filled",
  ELEVATED: "elevated",
  TONAL: "tonal",
  OUTLINED: "outlined",
  DEFAULT: "default",
};

export function Button({ config, text, children, ...props }) {
  const buttonLabel = children || text;

  if (!buttonLabel) {
    console.warn("Please provide a label for this Button component.");
  }

  switch (config) {
    case ButtonConfig.FILLED:
      return <FilledBtn {...props}>{buttonLabel}</FilledBtn>;
    case ButtonConfig.ELEVATED:
      return <ElevatedBtn {...props}>{buttonLabel}</ElevatedBtn>;
    case ButtonConfig.TONAL:
      return <TonalBtn {...props}>{buttonLabel}</TonalBtn>;
    case ButtonConfig.OUTLINED:
      return <OutlinedBtn {...props}>{buttonLabel}</OutlinedBtn>;
    default:
      return <DefaultBtn {...props}>{buttonLabel}</DefaultBtn>;
  }
}

Button.defaultProps = {
  config: ButtonConfig.DEFAULT,
};
