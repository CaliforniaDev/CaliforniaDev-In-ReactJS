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
};

// pass the configuration to the component to change the style
export function Button({ config, text }) {
  switch (config) {
    case ButtonConfig.FILLED:
      return <FilledBtn>{text}</FilledBtn>;
    case ButtonConfig.ELEVATED:
      return <ElevatedBtn>{text}</ElevatedBtn>;
    case ButtonConfig.TONAL:
      return <TonalBtn>{text}</TonalBtn>;
    case ButtonConfig.OUTLINED:
      return <OutlinedBtn>{text}</OutlinedBtn>;
    default:
      return <DefaultBtn>{text}</DefaultBtn>;
  }
}
