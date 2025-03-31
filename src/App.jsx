import React from 'react'
import {ToDoList} from './Components/ToDoList'
import { ContextProvider } from './context/context'
import './App.css'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <ToDoList />
      </div>
    </ContextProvider>
  )
}

export default App