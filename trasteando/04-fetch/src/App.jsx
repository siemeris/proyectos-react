import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [data, setData] = useState()
  const [primeraPalabra, setPrimeraPalabra] = useState()

  
  useEffect(()=>{
    fetch("https://catfact.ninja/fact")
    .then((res)=>res.json())
    .then((response)=>{
      setData(response.fact)
      setPrimeraPalabra(data.split(' ')[0])
    })

  },[])

  return (
    <div className="App">
      <h1>haciendo fetching</h1>
      <p>{data}</p>
      <p>La primera palabra del hecho: {data ? data.split(' ')[0] : "loading..."}</p>
      <img src={`https://cataas.com/cat/says/${primeraPalabra}`}></img>
    </div>
  )
}

export default App
