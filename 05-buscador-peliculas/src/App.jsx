import { useEffect, useState, useRef } from 'react'
import './App.css'
// import responseMovies from './mocks/with-results.json'
// import withoutResults from './mocks/no-results.json'
import { useMovies } from './hooks/useMovies'
import { Movies } from './components/Movies'

function useSearch () {

  const [search, updateSearch] = useState('')
  const [error, setError] = useState(null)
  
  //Para que el mensaje de "No se puede buscar una película vacía" no aparezca
  //en el primer renderizado, usamos un useRef
  const isFirstInput = useRef(true) //Para saber si el usuario ha utilizado o no todavía el input
  //Para que se valide a partir de que el usuario utilice el input

  useEffect(() => {
    if (isFirstInput.current) {
       isFirstInput.current = search === '' //En cuanto se escriba algo isFirstInput cambiaría a false
       return
     }

    if (search === '') {
      setError('No se puede buscar una película vacía')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una película con un número')
      return
    }

    if (search.length < 3) {
      setError('La búsqueda debe tener al menos 3 caracteres')
      return
    }
    setError(null)
  }, [search])

return {search, updateSearch, error}

}


function App() {


  // const inputRef = useRef()
  const {search, updateSearch, error} = useSearch()
  const { movies, getMovies } = useMovies({search})


  const handleSubmit = (event) => {
    event.preventDefault()
    // const value = inputRef.current.value

    //Para obtener todos los valores del formulario en un objeto
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)

    //En nuestro caso os interesa query
    // const {query} = Object.fromEntries(new window.FormData(event.target))
    // console.log(query)
    getMovies()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
    
  }

  return (
    <div className='page'>
      <header>
        <h1>Buscador de Películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          {/* <input name="query2" type="text" placeholder="Avengers, Star Wars, Matrix"></input> */}
          <input style={{
              border: '1px solid transparent',
              borderColor: error ? 'red' : 'transparent'
            }} onChange={handleChange} value={search} name="query" type="text" placeholder="Avengers, Star Wars, Matrix"></input>
          <button type="submit">Buscar</button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

      </header>
      <main>

        <Movies movies={movies} />

      </main>
    </div>
  )
}

export default App
