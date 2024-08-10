import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function decrmentHandler() {
    setCount(count-1);
  }

  function incrmentHandler() {
    setCount(count+1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <button onClick={decrmentHandler}> - </button>
      <div> {count} </div>
      <button onClick={incrmentHandler}> + </button>
      <div></div>
      <button onClick={reset}>Reset</button>
    </> 
  )
}

export default App
