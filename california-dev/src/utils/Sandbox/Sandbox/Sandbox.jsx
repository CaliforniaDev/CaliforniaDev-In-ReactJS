import { StyledDiv, InputWrapper, StyledInput } from './SandboxStyles';

export const Sandbox = () => {
  return (
    <div>
      <StyledDiv>
        <h1>SandBox</h1>
      </StyledDiv>
      <InputWrapper>
        <StyledInput type="text" />
      </InputWrapper>
    </div>
  );
};
