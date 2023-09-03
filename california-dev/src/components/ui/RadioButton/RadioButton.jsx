import { RadioLabel, RadioInput } from './RadioButton.styles';
//! Fix state styling like hover states and so forth.
export const RadioButton = ({ label, name, value, ...props }) => {
  return (
    <RadioLabel>
      {label || 'Label'}
      <RadioInput type="radio" name={name} value={value} {...props} />
      <span></span>
    </RadioLabel>
  );
};
