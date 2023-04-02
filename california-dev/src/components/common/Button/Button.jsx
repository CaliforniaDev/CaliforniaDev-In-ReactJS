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

export function Button({ config, text, children, ...rest }) {
  const buttonLabel = children || text;
  console.log(buttonLabel);
  switch (config) {
    case ButtonConfig.FILLED:
      return <FilledBtn {...rest}>{buttonLabel}</FilledBtn>;
    case ButtonConfig.ELEVATED:
      return <ElevatedBtn {...rest}>{buttonLabel}</ElevatedBtn>;
    case ButtonConfig.TONAL:
      return <TonalBtn {...rest}>{buttonLabel}</TonalBtn>;
    case ButtonConfig.OUTLINED:
      return <OutlinedBtn {...rest}>{buttonLabel}</OutlinedBtn>;
    default:
      return <DefaultBtn {...rest}>{buttonLabel}</DefaultBtn>;
  }
}

Button.defaultProps = {
  config: ButtonConfig.DEFAULT,
  text: "button",
};
