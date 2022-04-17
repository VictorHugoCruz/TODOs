import React from 'react'
import styled from 'styled-components'

const List = styled.section`
width:600px;
margin: 0 auto;
margin-top:40px;
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
