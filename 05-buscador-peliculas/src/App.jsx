import { useState } from 'react'
import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'
import {Movies} from './components/Movies'

function App() {
  const [count, setCount] = useState(0)

  const movies = responseMovies.Search
  const hasMovies = movies?.length > 0

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

          <Movies movies={movies} />
         
      </main>
    </div>
  )
}

export default App
