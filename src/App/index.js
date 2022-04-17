import React from 'react'
import AppUI from './AppUI'

// const defaultTodos = [
//   { text: 'Crear los TODOs', completed: true },
//   { text: 'Picar cebolla', completed: true },
//   { text: 'Añadir iconos', completed: false },
//   { text: 'Hacer mejoras a nuestro codigo', completed: false },
// ]

function App() {
  const localStorageTodos = localStorage.getItem('TODO_V1')
  let parsedTodos;

  if(!localStorageTodos){
    localStorage.setItem('TODO_V1', JSON.stringify([]))
    parsedTodos= [];
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(parsedTodos)
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

  const saveTodos= (newTodos)=>{
    const stringifyedTodo = JSON.stringify(newTodos);
    localStorage.setItem('TODO_V1', stringifyedTodo);
    setTodos(newTodos)
  }

  const completeTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos)
  }

  const deleteTodo = (text)=>{
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    if(newTodos[todoIndex].completed===true){
      newTodos.splice(todoIndex, 1)
    }else{
      alert('No puede eliminar un todo que no se haya completado');
    }
    
    saveTodos(newTodos)
  }
  
  return (
    <AppUI
      completedTodos = {completedTodos}
      totalTodos = {totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      searchedTodos={searchedTodos}
    />
  )
}

export default App
