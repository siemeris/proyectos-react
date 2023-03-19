import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
import { useState } from 'react'

const API_KEY = '9b0e8ff2'

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
        if(search === '') return null // Si es vacío, no hacemos el fetching de datos
        
        if(search){
          // setResponseMovies(withResults)
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
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