import React from 'react'
import styled from 'styled-components'
import { IoMdDoneAll, IoMdCloseCircle } from 'react-icons/io'
const Item = styled.li`
  background-color: #FAFAFA;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 50px rgba(32, 35, 41, 0.15);
  
  .TodoItem-p{
    margin: 24px 0 24px 24px;
    width: calc(100% - 120px);
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }

.TodoItem--completed{
  text-decoration: line-through;
} 

  .Icon{
    width: 48px;
    height: 48px;
    cursor: pointer;
    padding-top: 15px;
  }

  .Icon-check--active{
    color: #20dad8;
  }

  .Icon-delete:hover{
    color: red;
  }

  .Iconos{
    font-size: 30px;
  }
  .Iconos:hover{
    font-size: 35px;
  }
`;

function TodoItem(props) {
  const onCompleted = ()=>{
    alert('se ha completado el todo ' + props.text);
  }

  const onDelete = ()=>{
    alert('se ha eliminado el todo ' + props.text);
  }

  return (
    <Item>
      <span onClick={onCompleted} className={`Icon ${props.completed && 'Icon-check--active'}`}>
        <IoMdDoneAll className='Iconos'/>
      </span>
      <p className={`TodoItem-p ${props.completed && 'TodoItem--completed'}`}>
        {props.text}
      </p>
      <span onClick={onDelete} className={`Icon Icon-delete`}>
        <IoMdCloseCircle className='Iconos'/>
      </span>
    </Item>    
  )
}

export { TodoItem }
