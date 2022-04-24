import React from 'react'
import styled from 'styled-components'
import { TodoContext } from '../TodoContext';

const Entrada = styled.input`
  margin: 0 auto;
  /* width: calc(100%-32px); */
  min-width: 350px;
  height: 60px;
  background-color:#f2f4f5;
  border-radius: 6px;
  border: 2px solid #192234;
  font-size:24px;
  font-family: 'Monserrat';
  font-weight: 400;
  text-align: center;
  color: #1E1E1F;
  box-shadow: 0px 15px 100px rgba(32, 35, 41, 0.5);

  &::placeholder{
    color: #A5A5A5;
    font-family: 'Montserrat';
    font-weight: 400;
  }

  &:hover{
    width: 360px;
    height: 65px;
  }
  &:focus{
    outline-color:#146587;
  }
`;

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  
  const onChangeSearchValue = (event)=>{
    setSearchValue(event.target.value);
  }
  return (
  <Entrada 
    onChange={onChangeSearchValue} 
    placeholder='Escribe aqui'
    value={searchValue} 
    />    
  )
}

export { TodoSearch }
