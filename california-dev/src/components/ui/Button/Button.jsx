import {
  DefaultBtn,
  ElevatedBtn,
  FilledBtn,
  TonalBtn,
  OutlinedBtn,
} from "./ButtonStyles";

// ENUMS representing different button style variants
const ButtonVariants = {
  FILLED: "filled",
  ELEVATED: "elevated",
  TONAL: "tonal",
  OUTLINED: "outlined",
  DEFAULT: "default",
};

// Mapping object to link button style variants with their respective styled components
const ButtonComponents = {
  [ButtonVariants.FILLED]: FilledBtn,
  [ButtonVariants.ELEVATED]: ElevatedBtn,
  [ButtonVariants.TONAL]: TonalBtn,
  [ButtonVariants.OUTLINED]: OutlinedBtn,
  [ButtonVariants.DEFAULT]: DefaultBtn,
};

/**
 * Button component which renders a styled button based on the provided variant prop.
 * @param {string} variant - The button style variant to be applied (default, filled, elevated, tonal, or outlined)
 * @param {string} text - The text label for the button (alternative to using children)
 * @param {React.ReactNode} children - The children nodes to be rendered inside the button (alternative to using text prop)
 * @param {Object} props - Additional props to be passed to the button component
 * @returns {React.ReactNode} - The styled button component with the specified label and variant
 */
export function Button({ variant, text, children, ...props }) {
  // Use children or text as the button label, with children taking precedence
  const buttonLabel = children || text;

  // Warn if no label is provided for the button
  if (!buttonLabel) {
    console.warn("Please provide a label for this Button component.");
  }

  // Select the appropriate button component based on the variant prop, using DefaultBtn as a fallback
  const ButtonComponent = ButtonComponents[variant] || DefaultBtn;

  return <ButtonComponent {...props}>{buttonLabel}</ButtonComponent>;
}
