import * as Styled from "./styles";

export function Button({ label, elevated, filled, tonal, outline }) {
  return (
    <Styled.Button
      // different styles depending on props passed in
      elevated={elevated}
      filled={filled}
      tonal={tonal}
      outline={outline}
    >
      {label}
    </Styled.Button>
  );
}
