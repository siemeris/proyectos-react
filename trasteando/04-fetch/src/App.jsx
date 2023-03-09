import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [data, setData] = useState()
  const ENDPOINT_HECHO = "https://catfact.ninja/fact"
  // const ENDPOINT_IMAGE = `https://cataas.com/cat/says/${primeraPalabra}?json=true`
  const [imageUrl, setImageUrl] = useState()

  const getRandomFact = () => {
    fetch(ENDPOINT_HECHO)
    .then((res) => res.json()) //La respuesta la transformamos a JSON
    .then((response) => {
      const {fact} = response
      setData(fact)
      const primeraPalabra = fact.split(' ')[0]
 // `https://cataas.com/cat/says/${primeraPalabra}?json=true`

      fetch(`https://cataas.com/cat/says/${primeraPalabra}?json=true`)
    .then((res) => res.json())
    .then(response => setImageUrl(response.url))
    })
  }


  useEffect(() => {
    getRandomFact()
  }, [])




  return (
    <div className="App">
      <h1>Prueba técnica</h1>
      <section>
        <div>
      {data && <p>{data}</p>}
      <p>La primera palabra del hecho: {data ? data.split(' ')[0] : "loading..."}</p>
      </div>
      {imageUrl && <img src={`https://cataas.com/${imageUrl}`}></img>}
      </section>
      <div className="button-changefact">
      <button onClick={getRandomFact}>Get Random Fact</button>
      </div>
    </div>
  )
}

export default App
