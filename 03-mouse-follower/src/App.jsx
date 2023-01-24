import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      console.log('handleMove', { clientX, clientY })
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // Cleanup function
    return () => {
      // Este return se ejecuta:
      // --> cuando se desmonta el componente (App)
      // --> o cuando se actualiza el estado enabled, antes de ejecutar el efecto nuevo
      // Debemos limpiar la suscripción al evento pointermove
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // Si queremos que no se vea el cursor cuando el componente está montado, podemos usar otro useEffect
  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <h3>Proyecto 3</h3>
      <button onClick={() => { setEnabled(!enabled) }}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

function App () {
  // Para ver cuando se monta y desmonta el componente
  // const [mounted, setMounted] = useState(true)

  return (
    <main>
      <FollowMouse />
      {/* // Para ver cuando se monta y desmonta el componente
      {mounted && <FollowMouse />}
      <button onClick={() => setMounted(!mounted)}>Toggle mounted FollowMouse component</button> */}
    </main>
  )
}

export default App
