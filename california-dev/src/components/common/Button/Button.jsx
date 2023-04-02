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

export function Button({ config, text, ...rest }) {
  switch (config) {
    case ButtonConfig.FILLED:
      return <FilledBtn {...rest}>{text}</FilledBtn>;
    case ButtonConfig.ELEVATED:
      return <ElevatedBtn {...rest}>{text}</ElevatedBtn>;
    case ButtonConfig.TONAL:
      return <TonalBtn {...rest}>{text}</TonalBtn>;
    case ButtonConfig.OUTLINED:
      return <OutlinedBtn {...rest}>{text}</OutlinedBtn>;
    default:
      return <DefaultBtn {...rest}>{text}</DefaultBtn>;
  }
}

Button.defaultProps = {
  config: ButtonConfig.DEFAULT,
  text: "Button",
};
