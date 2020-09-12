
import React from 'react';
import tw from 'twin.macro';

import DarkToggle from './DarkToggle';

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Title>{siteTitle}</Title>

      <DarkToggle />
    </Wrapper>
  );
};

const Wrapper = tw.header`
  flex justify-between px-4 py-2
`

const Title = tw.h1`
  text-xl uppercase antialiased
`

export default Header;