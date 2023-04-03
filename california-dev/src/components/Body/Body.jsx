import { Button } from "../common/Button";
import { StyledBody } from "./styles";
import { Home } from "../Section/Home";
export function Body() {
  return (
    <StyledBody id="main">
      <Home />
      <Button variant="elevated" href="https://google.com" text="Elevated" />
    </StyledBody>
  );
}
