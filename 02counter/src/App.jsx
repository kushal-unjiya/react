import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter,setCounter] = useState(15)

  // let counter = 15
  const removeValue = () => {
    console.log('clicked', counter);
    if (counter > 0) {
      counter = counter - 1;
      setCounter(counter);
    }
  }

  const addValue = () => {
    console.log('clicked', counter);
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>counter app</h1>
      <h2>counter value: {counter} </h2>

      <button onClick={addValue}>add value</button>
      
      <br />
      <br />
      
      <button onClick={removeValue}>remove value</button>
    </>
  )
} 
export default App
