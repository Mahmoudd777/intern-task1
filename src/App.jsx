import { useState } from 'react'
import './App.css'
import Navbar from './componants/navbar'
import Card from './componants/card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Card/>
</>
  )
}

export default App
