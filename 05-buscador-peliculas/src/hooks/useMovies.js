import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
import { useState } from 'react'

export function useMovies({search}) {
    const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search
    // Mapeamos los datos de la API como buena práctica, por si en un futuro estos datos son renombrados
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }) )

    const getMovies = ()=>{
        if(search){
          // setResponseMovies(withResults)
          fetch(`https://www.omdbapi.com/?apikey=9b0e8ff2&s=${search}`)
            .then(res => res.json())
            .then(json => setResponseMovies(json))
        }
        else {
          setResponseMovies(withoutResults)
        }
    }

    console.log({movies: mappedMovies})
    return {movies: mappedMovies, getMovies}
  }