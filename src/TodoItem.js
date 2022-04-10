import React from 'react'
import styled from 'styled-components'
import { IoMdDoneAll, IoMdCloseCircle } from 'react-icons/io'
const Item = styled.li`
`;

function TodoItem(props) {
  return (
    <Item>
      <span>
        <IoMdDoneAll />
      </span>
      <p>
        {props.text}
      </p>
      <span>
        <IoMdCloseCircle />
      </span>
    </Item>    
  )
}

export { TodoItem }
