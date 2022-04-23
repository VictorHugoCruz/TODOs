import React from 'react'
import AppUI from './AppUI'

// const defaultTodos = [
//   { text: 'Crear los TODOs', completed: true },
//   { text: 'Picar cebolla', completed: true },
//   { text: 'Añadir iconos', completed: false },
//   { text: 'Hacer mejoras a nuestro codigo', completed: false },
// ]
function useLocalStorage(itemName, initialValue){
  const [error, setError] = React.useState(true)
  const [loading, setLoading] = React.useState(true)
  const [item, setItem] = React.useState(initialValue)

  React.useEffect(() =>{
    setTimeout(() => {

      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
      
        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem= initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem)
        }
        setItem(parsedItem)
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    },1000)
  })
  
  const saveItem= (newItem)=>{
    try {
      const stringifyedTodo = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyedTodo);
      setItem(newItem)
    } catch (error) {
      setError(true)
    }
  }

  return {item, saveItem, loading, error}
}
function App() {
  const {
    item: todos ,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODO_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
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
      error={error}
      loading={loading}
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
