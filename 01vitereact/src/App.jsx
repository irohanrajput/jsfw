import Chai from "./Chai"
function App(){
  return(
    <>
    <Chai/>
    <h4>Now we can write whatever we want</h4>
    </>
    // <h1>this unwrapped element will throw an error,
    // it must be wrapped for jsx, therefore, use <></>
  )
}

export default App
