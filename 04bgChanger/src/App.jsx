import { useState } from "react"
import Changer from './components/changers'


function App() {
  const [color, setColor] = useState("white")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded ">

        <Changer  color="red"/>
        <Changer color="green"/>
        <Changer color="orange"/>
        <Changer color="black"/>
      </div>
    </div>
  )
}

export default App