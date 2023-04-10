import { FabContainer, FabButton } from "./styles";
import { CogIcon } from "assets/images/icons/CogIcon";
export const FloatingActionButton = ({ onClick }) => {
  return (
    <FabContainer>
      <FabButton onClick={onClick}>{<CogIcon />}</FabButton>
    </FabContainer>
  );
};
