import React from 'react';
import tw, { styled } from 'twin.macro';
import AvatarImg from "../assets/images/avatar-denis-toledo.jpeg";

const HomePage = () => {
  return (
    <Wrapper>
      <Subject>
        <Avatar>
          <Img src={AvatarImg} alt="Denis Toledo" />
        </Avatar>
        <header>
          <Title>Denis Toledo</Title>
        </header>
        <Article>
          <h2>Frontend</h2>
          <h2>Developer</h2>
          <p>with a taste</p>
          <p>for design</p>
        </Article>
      </Subject>
      <Info>2</Info>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  ${tw`grid gap-y-12 w-full p-4 relative`}
  grid-template-areas: "subject"
                       "info";
  grid-auto-rows: max-content;
`

const Subject = styled.section`
  ${tw`grid grid-rows-none gap-y-4`}
  grid-area: subject;
  grid-auto-rows: max-content;
`

const Info = styled.section`
  ${tw`grid grid-cols-1 gap-y-6`}
  grid-area: info;
`

const Avatar = tw.div`
  block w-20 h-20 bg-body rounded-full overflow-hidden border-solid border-4 border-body shadow
`

const Img = tw.img`
  object-cover w-full
`

const Title = styled.h1`
  ${tw`uppercase font-thin text-2xl tracking-wide relative pb-2`}
  &:after {
    ${tw`absolute bottom-0 left-0 w-24 h-1 rounded-full shadow-sm`}
    content: "";
    background-color: palevioletred;
  }
`

const Article = tw.article`
  uppercase font-thin text-4xl tracking-wider
`

export default HomePage;