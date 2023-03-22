import { useEffect, useState } from 'react'
import './App.css'
import { Countries } from './components/Countries/Countries'

function App() {


  return (
    <div className="App">
      
    <Countries> </Countries>
    <Counter> </Counter>
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(" ");
  
  const increaseCount = () => {
    const value = Number(count);
    const newValue = value + 1 ;
    setCount(newValue)
  }
  const decreaseCount = () => {
    const value = Number(count);
    if( value > 0){
      const newValue = value - 1 ;
      setCount(newValue)
    }
  }
  return(
    <div>
      <h1>I love You {count}</h1>
      <button onClick={increaseCount}>Increase</button> 
      <br/>
      <br/>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  )
}
export default App
