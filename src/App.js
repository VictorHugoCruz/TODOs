import React from 'react'
import { CreateTodoButton } from './CreateTodoButton'
// import styled from 'styled-components'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'

const todos = [
  { text: 'Crear los TODOs', completed: false },
  { text: 'Picar cebolla', completed: false },
  { text: 'lavar ropa', completed: false },
]

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todos.map(todo =>(
          <TodoItem text={todo.text}/>
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  )
}

export default App
