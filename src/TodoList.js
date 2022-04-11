import React from 'react'
import styled from 'styled-components'

const List = styled.section`
width:calc(100%-500px);
border: 1px solid black;
`;

const ListUnOrder = styled.ul`
  margin: 0;
  padding: 0 0 56px 0;
  list-style: none;
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
