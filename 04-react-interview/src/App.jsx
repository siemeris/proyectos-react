import React from 'react'
import './App.css'
import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'
import { Otro } from './components/Otro'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  // Para recuperar la imagen cada vez que tenemos una cita nueva

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>Random cat fact</h1>
      {/* <section> */}
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the firts word for ${fact}`} />}
      {/* </section> */}

      <button onClick={handleClick}>Get New Fact</button>

      <Otro />
    </main>

  )
}
