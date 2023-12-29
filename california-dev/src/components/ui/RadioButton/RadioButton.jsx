import { StateLayer } from '../StateLayer';
import { RadioLabel, RadioInput, TargetWrapper } from './RadioButton.styles';
//! Fix state styling like hover states and so forth.
export const RadioButton = ({
  label = 'Your label',
  ref,
  id,
  name,
  value,
  checked,
  onChange,
  disabled = false,
}) => {
  return (
    <RadioLabel ref={ref} htmlFor={id}>
      <TargetWrapper isChecked={checked} isDisabled={disabled}>
        <StateLayer className="state-layer" />
        <RadioInput
          id={id}
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      </TargetWrapper>
      {label}
    </RadioLabel>
  );
};
