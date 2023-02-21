import { useState } from 'react'
import './App.css'
// import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function App() {

  const{ movies} = useMovies()

  // const movies = responseMovies.Search
  // // Mapeamos los datos de la API como buena práctica, por si en un futuro estos datos son renombrados
  // const mappedMovies = movies?.map(movie =>({
  //   id: movie.imdbID,
  //   title: movie.Title,
  //   year: movie.Year,
  //   img: movie.Poster
  // }) )

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
