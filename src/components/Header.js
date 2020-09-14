
import React from 'react';
import tw from 'twin.macro';
import Icon from './Icon';

import DarkToggle from './DarkToggle';

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Actions>
        <Social>
          <SocialLink
            href="https://github.com/dnstld"
            target="_blank"
            rel="noopener norefferer"
          >
            <Icon icon="github" />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/denistoledo/"
            target="_blank"
            rel="noopener norefferer"
          >
            <Icon icon="linkedin" />
          </SocialLink>
        </Social>

        <Tools>
          <DarkToggle />
        </Tools>
      </Actions>
      <div>
        Menu
      </div>
    </Wrapper>
  );
};

const Wrapper = tw.header`
  flex flex-col w-screen
`

const Actions = tw.div`
  w-screen flex justify-between items-center bg-header
`

const Social = tw.div`
  flex
`

const SocialLink = tw.a`
  px-4 py-2
`

const Tools = tw.div`
  px-4
`

export default Header;