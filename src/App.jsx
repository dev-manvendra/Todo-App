import { useEffect, useState } from 'react'
import { TodoContextProvider , useTodoContext } from './context/TodoContext'
import TodoForm from './assets/components/TodoForm'
import TodoItem from './assets/components/TodoItem'

function App() {

  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, {...todo, id: Date.now()}]);
  }
  const updateTodo = (id, todo)=>{
    setTodos((prev) => prev.map((each) => each.id === id? todo: each));

  }
  const deleteTodo= (id) => {
    setTodos((prev) => prev.filter((each) => each.id != id))
  }
  const checkToggle = (id) => {
    setTodos((prev) => prev.map((each)=> each.id === id? {...each, completed: !each.completed} :each))
  }

  useEffect(()=> {
    const localData = JSON.parse(localStorage.getItem("todos"))
    if(localData && localData.length > 0)
    {
      setTodos(localData);
    }
  }, [])
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))

  },[todos])

  return (
    <TodoContextProvider value={{todos, addTodo, updateTodo, deleteTodo, checkToggle}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        
                        {todos.map((todo)=> (
                          <div key = {todo.id} 
                          className='w-full'>
                            <TodoItem todo={todo} />
                          </div>
                        ))
                        }
                    </div>
                </div>
            </div>
    </TodoContextProvider>
  )
}

export default App
