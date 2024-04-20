import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400 text-black rounded-xl p-5'>tailwind test</h1>
      <br />
      
      <Card username="Tanishka" />
      <Card username="Gungun" />
      
      
 
    </>
  )
}

export default App
