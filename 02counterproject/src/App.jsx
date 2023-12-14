import { useState, use } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  // let counter = 15
  const addValue = () => {

    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)


  }

  const decreaseValue = () => {
    setCounter(counter - 1)
  }

  /* to not let it go beyong 20 and below 0
    const addValue = () => {
    if (counter < 20) {
      setCounter((prevCounter) => Math.min(prevCounter + 1, 20));
    }
  };
  const decreaseValue = () => {
    if (counter > 0) {
      setCounter((prevCounter) => Math.max(prevCounter - 1, 0));
    }
  };
  */

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease value {counter}</button>

      <p>Footer: {counter}</p>
    </>
  )
}

export default App
