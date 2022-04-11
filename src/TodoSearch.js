import React from 'react'
import styled from 'styled-components'

const Entrada = styled.input`
  margin: 0 auto;
  width: calc(100%-32px);
  min-width: 300px;
  height: 60px;
  background-color:#f2f4f5;
  border-radius: 6px;
  border: 2px solid #202329;
  font-size:24px;
  font-family: 'Monserrat';
  font-weight: 400;
  color: #1E1E1F;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.25);

  &::placeholder{
    color: #A5A5A5;
    font-family: 'Montserrat';
    font-weight: 400;
  }

  &:focus{
    outline-color:#61DAFA;
  }
`;

function TodoSearch() {
  return (
  <Entrada placeholder='Escribe aqui'/>    
  )
}

export { TodoSearch }
