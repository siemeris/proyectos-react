import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ')[0]
    console.log(firstWord)
    // Si nos queremos quedar con las tres primeras palabras
    // podemos usar
    // fact.split(' ' , 3).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => { res.json() })
      .then(response => {
        console.log(response)
        const { url } = response
        console.log(url)
        setImageUrl(url)
      })
  }, [fact])

  if (!imageUrl) return { imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png' }
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
