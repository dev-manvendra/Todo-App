import { useState } from 'react'
import { TodoContextProvider , useTodoContext } from './context/TodoContext'
import TodoForm from './assets/components/TodoForm'
import TodoItem from './assets/components/TodoItem'

function App() {
  const [todos, addTodo, deletTodo, updateTodo] = useTodoContext();

  return (
    <TodoContextProvider>
      <TodoForm />
      <TodoItem todo= {todo} />
    </TodoContextProvider>
  )
}

export default App
