import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Input, InputField, Label, Wrapper } from './TextField.styles';
import { ErrorIcon } from 'assets/images/icons/misc';
// * Add Delete button to clear text field
// import { DeleteIcon } from 'assets/images/icons/misc';

export const TextField = React.forwardRef(
  (
    {
      label = 'Your label',
      type = 'text',
      multiline = false,
      value,
      onChange,
      id,
      onKeyDown,
      error,
      supportingText,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    function handleFocus() {
      setIsFocused(true);
    }

    function handleBlur() {
      setIsFocused(false);
    }

    const InputOrTextarea = multiline ? 'textarea' : 'input';

    return (
      <Wrapper>
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
            $error={error}
            {...props}
          />
          <Label
            className="label"
            htmlFor={id}
            $isFocused={isFocused}
            $isPopulated={value !== ''}
            $error={error}
          >
            {label}
          </Label>
          {error && <ErrorIcon className="trailing-icon error" />}
        </InputField>
        {supportingText && !error && <p className="supporting-text">{supportingText}</p>}
        {error && <p className="supporting-text error">{error}</p>}
      </Wrapper>
    );
  }
);

TextField.displayName = 'TextField';

TextField.defaultProps = {
  type: 'text',
  multiline: false,
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string,
  onKeyDown: PropTypes.func,
  multiline: PropTypes.bool,
};
