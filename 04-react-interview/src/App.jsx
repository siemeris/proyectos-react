import React, { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState([])
  const [firstWord, setFirstWord] = useState('')

  const URL = 'https://catfact.ninja/fact'
  //   const URL_IMAGE = `https://cataas.com/cat/says/${firstWord}`

  useEffect(() => {
    fetch(URL).then((res) => res.json()).then((data) => setFact(data.fact))
    console.log(fact)

    // fetch(`URL_IMAGE${fact}`).then((res) => res.json()).then((data) => setImg(data.fact))
    // fact && setFirstWord(fact.split(' ')[0])
    // setFirstWord(data.fact.split(' ')[0])
  }, [])

  return (
    <main>
      <section>{fact}</section>
      <img src={`https://cataas.com/cat/says/${firstWord}`} alt={fact} />

    </main>

  )
}
