import React, { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState([])
  const [firstWord, setFirstWord] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  //   const URL_IMAGE = `https://cataas.com/cat/says/${firstWord}`
  // const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`
  

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((res) => res.json())
      .then((data) => { 
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ')[0]
        setFirstWord(firstWord)
        // Si nos queremos quedar con las tres primeras palabras
        // podemos usar 
        // fact.split(' ' , 3).join(' ')
      })

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        const { url } = data
        console.log(url)
        setImageUrl(url)
      })
  }, [])

  return (
    <main>
      <h1>Random cat fact</h1>
      {fact && <p>{fact}</p>}
      {/* <img src={`https://cataas.com/cat/says/${firstWord}`} alt={fact} /> */}
      {imageUrl && <img src={`https://cataas.com${imageUrl}`} alt={`Image extracted using the firts word for ${fact}`}></img>}

    </main>

  )
}
