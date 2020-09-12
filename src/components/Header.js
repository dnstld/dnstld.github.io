
import React from 'react';
import tw from 'twin.macro';
import Icon from './Icon';

import DarkToggle from './DarkToggle';

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Title>
        <Icon icon="github" /> 
        <Icon icon="linkedin" /> 
        {siteTitle}
      </Title>

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