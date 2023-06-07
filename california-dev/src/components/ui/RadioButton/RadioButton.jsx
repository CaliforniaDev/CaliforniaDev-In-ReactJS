import {RadioLabel, RadioInput} from "./RadioButton.styles"

export const RadioButton = ({label, name, value, ...props}) => {
  return (
    <RadioLabel>
      {label || "Label"}
      <RadioInput type="radio" name={name} value={value} {...props} />
      <span></span>
    </RadioLabel>
  )
}