import React from 'react'

function ListOfMovies ({ movies }) {
    return (
      <ul className='movies'>
        {
          movies.map(movie => (
            <li className='movie' key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.img} alt={movie.title} />
            </li>
          ))
        }
      </ul>
    )
  }
  
  function NoMoviesResults () {
    return (
      <p>No se encontraron películas para esta búsqueda</p>
    )
  }
  
  export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0
  
    return (
      hasMovies
        ? <ListOfMovies movies={movies} />
        : <NoMoviesResults />
    )
  }


// const Movies = () => {
//     const movies = responseMovies.Search
//   return (
//     <div>
//         <ul>
//               {
//                 movies.map(movie => (
//                   <li key={movie.imdbID}>
//                     <h3>{movie.Title}</h3>
//                     <p>{movie.Year}</p>
//                     <img src={movie.Poster} alt={movie.Title}></img>
//                     </li>
//                 ))
//               }
//             </ul>
//     </div>
//   )
// }

// export default Movies