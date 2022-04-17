import React from 'react'
import { CreateTodoButton } from '../CreateTodoButton'
// import styled from 'styled-components'
import { TodoCounter } from '../TodoCounter'
import { TodoItem } from '../TodoItem'
import { TodoList } from '../TodoList'
import { TodoSearch } from '../TodoSearch'

function AppUI({
  completedTodos,
  totalTodos,
  searchValue,
  setSearchValue,
  completeTodo,
  deleteTodo,
  searchedTodos,
}) {
  return (
    <>
      <TodoCounter
        completed = {completedTodos}
        total = {totalTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
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
      <CreateTodoButton />
    </>
  )
}

export default AppUI
