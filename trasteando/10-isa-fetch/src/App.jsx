import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState("Matrix")
  const API_KEY = '4287ad07'
  const URL_MOVIES=`https://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`

  useEffect(()=>{
    fetch(URL_MOVIES)
    .then((res)=>res.json())
    .then((response)=>{
      setMovies(response.Search) 
  }, [title])
})

  const handleSubmit = (event) =>{
    event.preventDefault()

  }


  return (
    <div className="App">
      <header>
      <h1 className="texto-titulo">Buscador de películas</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Matrix, Avengers..." onChange={(e)=>{setTitle(e.target.value); console.log(title)}}></input>
        <button>Enviar</button>
      </form>
      </header>
      <main>
      <ul className="cards-movies">
      {movies ? movies.map((movies)=>(
        <li className="card-movie" key={movies.imdbID}>
        <p>{movies.Title}</p>
        <img src={movies.Poster} />
        </li>
      )) : 
      <p> No se encontraron películas</p>}
      </ul>
      </main>
    </div>
  )
}

export default App
