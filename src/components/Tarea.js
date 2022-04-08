import React from 'react'
import Styled from 'styled-components'

const ContainerTarea = Styled.div`
  width: 500px;
  min-height: 65px;
  background-color: #1b1b32;
  margin: 5px 0;
  padding: 8px 15px 8px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 2px solid white;
`;

const ContainerTexto = Styled.div`
  width:100px;
`;

const Span = Styled.span`
  width: 25px;
`;
function Tarea({ texto }) {
  return (
    <ContainerTarea>
      <ContainerTexto>
        { texto }
      </ContainerTexto>
      <Span>

      </Span>
    </ContainerTarea>
  )
}

export default Tarea