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
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
       isFirstInput.current = search === ''
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

  const { movies } = useMovies()
  // const inputRef = useRef()
  const {search, updateSearch, error} = useSearch()


  const handleSubmit = (event) => {
    event.preventDefault()
    // const value = inputRef.current.value

    //Para obtener todos los valores del formulario en un objeto
    // const fields = Object.fromEntries(new window.FormData(event.target))
    // console.log(fields)

    //En nuestro caso os interesa query
    // const {query} = Object.fromEntries(new window.FormData(event.target))
    // console.log(query)
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
    console.log(search)
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
