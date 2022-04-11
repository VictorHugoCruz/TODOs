import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  margin: 30px 0;
  text-align: center;
  margin-bottom: 30px;
`;


function TodoCounter() {
  return (
    <Title>Has completado 2 de 3 TODOs</Title>
  )
}

export { TodoCounter }