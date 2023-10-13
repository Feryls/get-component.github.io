import { useState } from 'react'
import './App.css'
import Testing from './Testing.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Testing></Testing>
      </div>
    </>
  )
}

export default App
