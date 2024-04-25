import { useState } from "react"


function App() {
  const [color, setColor] = useState("grey")

  return (
    <div className=" h-screen duration-200 flex items-center justify-center text-white font-bold text-xl p-7"
    style={{backgroundColor: color}}
    >Click on the buttons below to change the background color.
    <br />
    this is {color} background
      {/* <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded ">

        <Changer color="red"/>
        <Changer color="green"/>
        <Changer color="orange"/>
        <Changer color="black"/>
      </div> */}
      <div
      className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 rounded ">
      
      <button onClick={() => setColor("red")} className="px-4, rounded-full"
      style={{backgroundColor:"red"}}>
        red
      </button>

      <button onClick={() => setColor("green")} className="px-4, rounded-full"
      style={{backgroundColor:"green"}}>
        green
      </button>

      <button onClick={() => setColor("blue")} className="px-4, rounded-full"
      style={{backgroundColor:"blue"}}>
        blue
      </button>

      <button onClick={() => setColor("black")} className="px-4, rounded-full"
      style={{backgroundColor:"black"}}>
        blue
      </button>


      </div>
    </div>
  )
}

export default App