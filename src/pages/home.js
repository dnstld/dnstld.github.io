import React from 'react';
import tw, { styled } from 'twin.macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteLeft,
  faQuoteRight,
} from '@fortawesome/free-solid-svg-icons';

import ContactInfo from '../components/ContactInfo';

const HomePage = () => (
  <Wrapper>
    <Subject>
      <Avatar>
        <Img src="avatar-denis-toledo.jpeg" alt="Denis Toledo" />
      </Avatar>

      <header>
        <Title>Denis Toledo</Title>
      </header>

      <Description>
        <h2>Frontend</h2>
        <h2>Developer</h2>
        <p>with a taste</p>
        <p>for design</p>
      </Description>

      <ContactInfo />
    </Subject>
    <Info>
      <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="text-primary" />
      <p>
        I am a frontend developer with hands-on experience with HTML5, CSS3, and
        modern JavaScript, including 4+ years of working with Ember.js.
      </p>
      <p>
        An enthusiast user experience and user interface designer with strong
        visual skills and devoted to the Human-centered design process of product development.
      </p>
      <p>To add, I have a vast experience as a graphic designer.</p>
      <FontAwesomeIcon icon={faQuoteRight} size="3x" className="text-primary ml-auto" />
    </Info>
  </Wrapper>
);

const Wrapper = styled.div`
  ${tw`grid gap-y-12 w-full p-8 relative md:gap-y-0 md:gap-x-24 md:items-center`}
  grid-template-areas: "subject"
                       "info";
  grid-auto-rows: max-content;

  @media (min-width: 768px) {
    grid-template-areas: "subject info";
  }
`;

const Subject = styled.section`
  ${tw`grid grid-rows-none gap-y-4`}
  grid-area: subject;
  grid-auto-rows: max-content;
`;

const Avatar = tw.div`
  block w-24 h-24 bg-body rounded-full overflow-hidden border-solid border-4 border-body shadow
`;

const Img = tw.img`
  object-cover w-full
`;

const Title = styled.h1`
  ${tw`uppercase font-light text-2xl tracking-wide relative pb-2`}
  &:after {
    ${tw`absolute bottom-0 left-0 w-24 h-1 rounded-full shadow-sm bg-primary`}
    content: "";
  }
`;

const Description = tw.article`
  uppercase font-light text-4xl tracking-wider
`;

const Info = styled.article`
  ${tw`grid grid-cols-1 gap-y-6 leading-relaxed text-xl`}
  grid-area: info;
  grid-auto-rows: max-content;
`;

export default HomePage;
