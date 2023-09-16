import { useState } from 'react';
import { Input, InputField, Label } from './TextField.styles';

export const TextField = ({
  label = 'Your label',
  type = 'text',
  multiline = false,
  value,
  onChange,
  id,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const InputOrTextarea = multiline ? 'textarea' : 'input';

  return (
    <InputField isFocused={isFocused}>
      <Input
        as={InputOrTextarea}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
        multiline={multiline}
        {...props}
      />

      <Label htmlFor={id} isFocused={isFocused} isPopulated={value !== ''}>
        {label}
      </Label>
    </InputField>
  );
};
