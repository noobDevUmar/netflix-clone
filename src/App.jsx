import { useState } from 'react'
import Homescreen from './Components/Homescreen'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Homescreen/>
    </>
  )
}

export default App
