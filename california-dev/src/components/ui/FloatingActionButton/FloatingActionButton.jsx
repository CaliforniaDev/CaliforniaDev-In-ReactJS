import React, { useState } from 'react';
import { useTheme } from 'context/ThemeContext';

import { FabContainer, FabButton, FabMenu } from './Fab.styles';
import { StateLayer } from '../StateLayer';
import { CogIcon } from 'assets/images/icons/navigation/CogIcon';
export const FloatingActionButton = () => {
  const { toggleTheme } = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => setExpanded(prevState => !prevState);
  const menuSize = '180px';
  return (
    <FabContainer className="container">
      <FabButton size={menuSize} $expanded={expanded} onClick={handleClick}>
        <StateLayer className="state-layer" />
        <FabMenu size={menuSize} $expanded={expanded}>
          <ul>
            <li onClick={toggleTheme}>Theme Mode</li>
          </ul>
        </FabMenu>
        {!expanded && <CogIcon className="icon" />}
      </FabButton>
    </FabContainer>
  );
};
