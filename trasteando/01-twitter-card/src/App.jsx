import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TwitterCard from './components/TwitterCard'


function App() {

  const users = [
    {
      name: 'Jose',
      username: 'joselete',
      avatar: 'https://unavatar.io/joselete',
      isFollowing: false
    
    },
    {
      name: 'Manolo',
      username: 'manolo',
      avatar: 'https://unavatar.io/manolo',
      isFollowing: false
    },
    {
      name: 'Paco',
      username: 'paco',
      avatar: 'https://unavatar.io/paco',
      isFollowing: true
    },
    {
      name: 'Pepe',
      username: 'pepe',
      avatar: 'https://unavatar.io/pepe',
      isFollowing: true
    }]

    const addAt = (username) => {
      return `@${username}`
      }

  return (
    <div className="App">
      {users.map(({name, username, isFollowing})=>
      (<TwitterCard name={name} username={username} initialIsFollowing={isFollowing} addAt={addAt}/>))}
    </div>
  )
}

export default App
