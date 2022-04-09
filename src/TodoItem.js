import React from 'react'
import styled from 'styled-components'

const Item = styled.li`
`;

function TodoItem(props) {
  return (
    <Item>
      <span>c</span>
      <p>{props.text}</p>
      <span>x</span>
    </Item>    
  )
}

export { TodoItem }
