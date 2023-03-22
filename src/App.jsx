
import { useEffect, useState } from 'react'
import './App.css'
import { Countries } from './components/Countries/Countries'

function App() {


  return (
    <div className="App">
      
    <Countries> </Countries>
    <ExternalUser> </ExternalUser>
    </div>
  )
}


const ExternalUser = () => {
const [users, setUsers] = useState([]);
useEffect( () => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data))
},[])

console.log(users);
  return (
    <div>
      <h1>External user:</h1>
      {
        users.map( user => <li>Name: {user.name}</li>)
      }
    </div>
  )
}

export default App
