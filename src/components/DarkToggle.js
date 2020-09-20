import React from 'react';
import tw from 'twin.macro';
import Toggle from 'react-toggle';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import { ThemeContext } from './ThemeContext';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <Container>
      <Label htmlFor="theme-toggle">Dark mode</Label>

      <Toggle
        id="theme-toggle"
        checked={colorMode === 'dark'}
        icons={false}
        onChange={(ev) => {
          trackCustomEvent({
            category: 'Theme Color',
            action: 'Change',
            label: 'Theme  Color Analyzes',
          });
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />
    </Container>
  );
};

const Container = tw.div`
  inline-flex items-center
`;

const Label = tw.label`
  mr-2 text-xs uppercase antialiased
`;

export default DarkToggle;
