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

// pass the configuration to the component to change the style
export function Button({ config, text, href }) {
  switch (config) {
    case ButtonConfig.FILLED:
      return <FilledBtn href={href}>{text}</FilledBtn>;
    case ButtonConfig.ELEVATED:
      return <ElevatedBtn href={href}>{text}</ElevatedBtn>;
    case ButtonConfig.TONAL:
      return <TonalBtn href={href}>{text}</TonalBtn>;
    case ButtonConfig.OUTLINED:
      return <OutlinedBtn href={href}>{text}</OutlinedBtn>;
    default:
      return <DefaultBtn href={href}>{text}</DefaultBtn>;
  }
}

Button.defaultProps = {
  config: ButtonConfig.DEFAULT,
  text: "Button",
}
