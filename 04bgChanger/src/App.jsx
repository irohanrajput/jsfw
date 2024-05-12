import { useState } from "react"
import Changer from "./components/Changer"


function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className=" h-screen duration-200 flex items-center justify-center text-white font-bold text-xl p-7"
    style={{backgroundColor: color}}
    >Click on the buttons below to change the background color.
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded ">

        <Changer color="red"/>
        <Changer color="green"/>
        <Changer color="orange"/>
        <Changer color="black"/>
      </div>
    </div>
  )
}

export default App