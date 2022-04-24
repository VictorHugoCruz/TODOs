import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
import { Modal } from '../Modal'
import { TodoContext } from '../TodoContext'
// import styled from 'styled-components'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'

function AppUI() {
  const {error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal  
  } = React.useContext(TodoContext)
  return (
    <>
      <TodoCounter />
      <TodoSearch />
        <TodoList>
          {error && <p>Hubo un error, por favor recarga la pagina</p>}
          {loading && <p>Estamos cargando</p>}
          {(!loading && !searchedTodos.length && !error) && <p>Crea tu primer TODO</p>}

          {searchedTodos.map(todo =>(
            <TodoItem 
              completed={todo.completed} 
              key={todo.text} 
              text={todo.text}
              onCompleted={()=>completeTodo(todo.text)}  
              onDeleted={()=>deleteTodo(todo.text)}
              />
          ))}
          </TodoList>

        {openModal && (
          <Modal>
            <p>Hola soy el modal</p>
          </Modal>
        )}
      <CreateTodoButton setOpenModal={setOpenModal}/>
    </>
  )
}

export default AppUI
