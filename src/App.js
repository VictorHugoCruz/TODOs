import React from 'react'
import { CreateTodoButton } from './CreateTodoButton'
// import styled from 'styled-components'
import { TodoCounter } from './TodoCounter'
import { TodoItem } from './TodoItem'
import { TodoList } from './TodoList'
import { TodoSearch } from './TodoSearch'

const defaultTodos = [
  { text: 'Crear los TODOs', completed: true },
  { text: 'Picar cebolla', completed: true },
  { text: 'Añadir iconos', completed: false },
  { text: 'Hacer mejoras a nuestro codigo', completed: false },
]

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(defaultTodos)
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue >= 1){
    searchedTodos = todos;
  }else{
    searchedTodos = todos.filter(todo =>{
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();

      return todoText.includes(searchText);
    })
  }

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    setTodos(newTodos)
  }

  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text == text)
    const newTodos = [...todos]
    if(newTodos[todoIndex].completed===true){
      newTodos.splice(todoIndex, 1)
    }else{
      alert('No puede eliminar un todo que no se haya completado');
    }
    
    setTodos(newTodos)
  }
  
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

export default App
