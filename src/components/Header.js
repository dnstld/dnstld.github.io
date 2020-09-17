
import React from 'react';
import tw from 'twin.macro';
import Icon from './Icon';

import DarkToggle from './DarkToggle';

const Header = ({ siteTitle }) => {
  return (
    <Wrapper>
      <Actions>
        <div>
          <SocialLink
            href="https://github.com/dnstld"
            target="_blank"
            rel="noopener norefferer"
          >
            <Icon icon="github" size={16} />
          </SocialLink>

          <SocialLink
            href="https://www.linkedin.com/in/denistoledo/"
            target="_blank"
            rel="noopener norefferer"
          >
            <Icon icon="linkedin" size={16} />
          </SocialLink>
        </div>

        <Tools>
          <DarkToggle />
        </Tools>
      </Actions>
    </Wrapper>
  );
};

const Wrapper = tw.header`
  w-screen flex
`

const Actions = tw.div`
  w-full flex justify-between items-center bg-tools rounded shadow p-2 m-4 box-border
`

const SocialLink = tw.a`
  w-8 h-8 inline-flex items-center justify-center shadow-sm rounded-full mr-4 bg-tools hover:bg-body
`

const Tools = tw.div`
`

export default Header;