import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // const [variable, setMethod] = useState(default_value)
  // 'variable' ek variable hai jise 'setMethod' control karega

  let [counter, rohanCounter] = useState(0)
  // let [counter, setCounter] = useState(0)

  const addValue = () =>{
    rohanCounter(counter + 1)
  }

  const decreaseValue = () =>{
    if (counter < 1){
      alert("value can't be negative")
    }
    else{
    rohanCounter(counter -1)
    }}

  const resetValue = () => {
    rohanCounter(counter = 0)
  } 
    
  

  return (
    <>
    <h1>fir se ek counter app</h1>
    <h2>counter value : {counter}</h2>

    <button onClick={addValue}>add value</button>
    <br /> <br />
    <button onClick={resetValue}> Reset Value </button>
    <br /> <br />
    <button onClick={decreaseValue}>decrease value</button>
    </>
  )
}

export default App
