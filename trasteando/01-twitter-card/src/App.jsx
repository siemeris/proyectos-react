import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TwitterCard from './components/TwitterCard'


function App() {

  const users = [
    {
      name: 'Jose',
      username: 'joselete',
      avatar: 'https://unavatar.io/joselete'
    },
    {
      name: 'Manolo',
      username: 'manolo',
      avatar: 'https://unavatar.io/manolo'
    },
    {
      name: 'Paco',
      username: 'paco',
      avatar: 'https://unavatar.io/paco'
    },
    {
      name: 'Pepe',
      username: 'pepe',
      avatar: 'https://unavatar.io/pepe'
    }]


  return (
    <div className="App">
      {users.map((users)=>
      (<TwitterCard users={users}/>))}
    </div>
  )
}

export default App
