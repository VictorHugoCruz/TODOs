import React from 'react'
import styled from 'styled-components'
import Tarea from './components/Tarea';

const ContApp = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #1b1b98;
`;

const StyledTodoContainer = styled.section`
  width: 600px;
  min-height:700px;
  background-color: #dbdae1;
  justify-content: center;
  align-items: center;
  border-radius: 25px;

`;

const Title = styled.h1`
  color: #1b1b32;
  font-size: 25px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
`
function App() {
  return (
    <ContApp>
      <StyledTodoContainer>
        <Title>Mis tareas</Title>
        <Tarea/>
      </StyledTodoContainer>
    </ContApp>
  )
}

export default App
