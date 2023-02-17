import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='page'>
      <header>
      <h1>Buscador de Películas</h1>
      <form className='form'>
        <input type="text" placeholder="Avengers, Star Wars, Matrix"></input>
        <button type="submit">Buscar</button>
      </form>
      </header>
      <main>
        Los resultados
      </main>
    </div>
  )
}

export default App
