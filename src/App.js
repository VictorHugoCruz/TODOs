import React from 'react'
import { CreateTodoButton } from './CreateTodoButton'
// import styled from 'styled-components'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'

const todos = [
  { text: 'Crear los TODOs', completed: true },
  { text: 'Picar cebolla', completed: true },
  { text: 'Añadir iconos', completed: false },
  { text: 'Hacer mejoras a nuestro codigo', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
          <TodoItem completed={todo.completed} key={todo.text} text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
