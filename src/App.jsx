import { useState } from 'react'
import { TodoContextProvider } from './context/TodoContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <TodoContextProvider>
      <h1 className="bg-amber-800 text-white text-xl p-1 ">this is the heading</h1>
    </TodoContextProvider>
  )
}

export default App
