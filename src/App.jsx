import { useState } from 'react'
import './App.css'
import { Countries } from './components/Countries/Countries'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
    <Countries> </Countries>
    <Counter> </Counter>
    </div>
  )
}

function Counter() {
  const abc = useState(0);
  console.log(abc);
  return(
    <div>
      <h1>Counter:</h1>
      <button>Increase</button> 
      <br/>
      <br/>
      <button>Decrease</button>
    </div>
  )
}
export default App
