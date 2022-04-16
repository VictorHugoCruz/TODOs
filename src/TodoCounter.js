import React from 'react'
import styled from 'styled-components'
import image from './assets/logotodo.jpg'

const Title = styled.h2`
  margin: 30px 0;
  text-align: center;
  margin-bottom: 30px;
  font-weight:700;
`;

const Logo = styled.div`
  width:120px;
  height: 120px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom:50px;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: auto;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    transition: all 0.2;
  }

  img:hover{
    width: 110%;
    height: 110%;
  }
`;


function TodoCounter({ completed, total }) {
  return (
    <>
    <Title>Has completado {completed} de {total} TODOs</Title>
    <Logo>
      <img src={image} alt="Logo" />
    </Logo>
    </>
  )
}

export { TodoCounter }