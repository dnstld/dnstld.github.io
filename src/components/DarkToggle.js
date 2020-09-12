import React from 'react';

import { ThemeContext } from './ThemeContext';

import Toggle from 'react-toggle';
import tw from 'twin.macro';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <Container>
      <Label htmlFor='theme-toggle'>Dark theme</Label>

      <Toggle
        id="theme-toggle"
        checked={colorMode === 'dark'}
        icons={false}
        onChange={ev => {
          setColorMode(ev.target.checked ? 'dark' : 'light');
        }}
      />
    </Container>
  );
};

const Container = tw.div`
  inline-flex items-center
`

const Label = tw.label`
  mr-2 text-xs uppercase antialiased
`

export default DarkToggle;