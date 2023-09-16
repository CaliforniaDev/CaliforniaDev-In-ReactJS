import { RadioLabel, RadioInput } from './RadioButton.styles';
//! Fix state styling like hover states and so forth.
export const RadioButton = ({ label = "Your label", name, value, id, checked, ...props }) => {
  return (
    <RadioLabel htmlFor={id}>
      {label}
      <RadioInput type="radio" id={id} name={name} value={value} checked={checked} {...props} />
      <span />
    </RadioLabel>
  );
};