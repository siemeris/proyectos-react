import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  // Para recuperar l cita al cargar la página
  useEffect(() => { refreshFact() }, [])

  return { fact, refreshFact }
}
