import React from 'react'
import styled from 'styled-components'

const List = styled.section`
`;

const ListUnOrder = styled.ul`
`;

function TodoList(props) {
  return (
    <List>
      <ListUnOrder>
        { props.children }
      </ListUnOrder>
    </List>
  )
}

export { TodoList }
