
import { useEffect, useState } from 'react'
import './App.css'
import { Countries } from './components/Countries/Countries'

function App() {

  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then( data => setCountries(data))
  }, [])
  return (
    <div className="App">

      <div className="users-container">
        {
          countries.map( country => <Countries country = {country} key = {country.flags.png} > </Countries>)
        }

      </div>
  
    </div>
  )
}

export default App

