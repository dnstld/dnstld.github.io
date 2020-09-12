import React from 'react';
import tw, { styled } from 'twin.macro'

export default function Home() {
  return (
    <Container>
      <Title>Soon =)</Title>
    </Container>
  )
}

const Container = styled.div`
  margin: 5rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = tw.h1`
  bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
`