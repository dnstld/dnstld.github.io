import React from 'react';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <h1>Soon =)</h1>
    </Container>
  )
}

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`