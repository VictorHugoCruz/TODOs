import React, { Children } from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components'

const StyledModal = styled.div`
  background: rgba(32,35,41,.8);
  position: fixed;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

function Modal({ children }){
  return ReactDOM.createPortal(
    <StyledModal>
      {children}
    </StyledModal>,
    document.getElementById('modal')
  )
}

export { Modal }