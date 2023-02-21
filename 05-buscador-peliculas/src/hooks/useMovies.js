import responseMovies from '../mocks/with-results.json'
import withoutResults from '../mocks/no-results.json'

export function useMovies() {
    const movies = responseMovies.Search
    // Mapeamos los datos de la API como buena práctica, por si en un futuro estos datos son renombrados
    const mappedMovies = movies?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      img: movie.Poster
    }) )
    console.log({movies: mappedMovies})
    return {movies: mappedMovies}
  }