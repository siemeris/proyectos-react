import withResults from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'
import { useRef, useState, useMemo } from 'react'

const API_KEY = '9b0e8ff2'

export function useMovies({search, sort}) {
    const [responseMovies, setResponseMovies] = useState([])

    const movies = responseMovies.Search
    // Mapeamos los datos de la API como buena práctica, por si en un futuro estos datos son renombrados
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }) )

    // Usamos useRef para evitar que se haga la misma búsqueda dos veces seguidas:
    const previousSearch = useRef(search) //se guarda la referencia y no se cambia por renderizado

    const getMovies = ()=>{
        if(search === previousSearch.current) return
        if(search === '') return null // Si es vacío, no hacemos el fetching de datos
        
        if(search){
          // setResponseMovies(withResults)
          previousSearch.current = search // para evitar misma búsqueda dos veces seguidas
          fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
            .then(res => res.json())
            .then(json => setResponseMovies(json))
        }
        else {
          setResponseMovies(withoutResults)
        }
    }

    console.log({movies: mappedMovies})

    // const sortedMovies = sort ? [...mappedMovies].sort((a,b)=>a.title.localeCompare(b.title)) : mappedMovies
    const sortedMovies = useMemo(()=>{
      return sort ? [...mappedMovies].sort((a,b)=>a.title.localeCompare(b.title)) : mappedMovies
    },[sort, mappedMovies])
    //Usamos useMemo para poder memorizar computaciones que hemos hecho que queremos evitar que
    //se hagan a no ser que cambien las dependencias que estamos especificando

    return {movies: sortedMovies, getMovies}
  }