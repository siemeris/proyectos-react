import React, { useEffect, useState } from 'react'
import './App.css'

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  //   const URL_IMAGE = `https://cataas.com/cat/says/${firstWord}`
  // const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

  // Para recuperar l cita al cargar la página
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    console.log(firstWord)
    // Si nos queremos quedar con las tres primeras palabras
    // podemos usar
    // fact.split(' ' , 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { url } = response
        console.log(url)
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>
      <h1>Random cat fact</h1>
      {/* <section> */}
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Image extracted using the firts word for ${fact}`} />}
      {/* </section> */}
    </main>

  )
}
