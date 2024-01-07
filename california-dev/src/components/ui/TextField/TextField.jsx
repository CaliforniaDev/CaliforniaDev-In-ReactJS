
import React, { useState } from 'react';
import { Input, InputField, Label } from './TextField.styles';

export const TextField = React.forwardRef(({
  label = 'Your label',
  type = 'text',
  multiline = false,
  value,
  onChange,
  id,
  onKeyDown,
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false);
  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const InputOrTextarea = multiline ? 'textarea' : 'input';

  return (
    <InputField $isFocused={isFocused}>
      <Input
        id={id}
        ref={ref}
        as={InputOrTextarea}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onFocus={handleFocus}
        onBlur={handleBlur}
        $isFocused={isFocused}
        $multiline={multiline}
        {...props}
      />

      <Label htmlFor={id} $isFocused={isFocused} $isPopulated={value !== ''}>
        {label}
      </Label>
    </InputField>
  );
});

TextField.displayName = 'TextField';


