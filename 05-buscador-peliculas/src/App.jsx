import { useState } from 'react'
import './App.css'
import responseMovies from './mocks/with-results.json'
import withoutResults from './mocks/no-results.json'

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
        {
          hasMovies ?
          (
            <ul>
              {
                movies.map(movie => (
                  <li key={movie.imdbID}>
                    <h3>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title}></img>
                    </li>
                ))
              }
            </ul>
          ) :
          <p>No se encontraron películas para esta búsqueda</p>
        } 
      </main>
    </div>
  )
}

export default App
