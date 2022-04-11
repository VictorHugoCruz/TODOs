import React from 'react'
import styled from 'styled-components'
import { IoIosAddCircleOutline } from 'react-icons/io'

const Button = styled.button`
width: 300px;
`;
function CreateTodoButton() {
  return (
    <Button>
      <IoIosAddCircleOutline />
    </Button>    
  )
}

export { CreateTodoButton }