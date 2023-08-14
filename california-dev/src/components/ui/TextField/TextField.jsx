import { useState } from "react";
import { Input, InputField, Label } from "./TextField.styles";

export const TextField = ({ label, type, multiline, ...props }) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(event) {
    setText(event.target.value);
    console.log(text);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  const InputOrTextarea = multiline ? "textarea" : "input";

  return (
    <InputField>
      <Input
        as={InputOrTextarea}
        type={type || "text"}
        value={text}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
        multiline={multiline}
        {...props}
      />
      <Label isFocused={isFocused} isPopulated={text !== ""}>
        {label || "Your Label"}
      </Label>
    </InputField>
  );
};
