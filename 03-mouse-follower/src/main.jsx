import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode es un componente que nos permite detectar problemas potenciales en la aplicación
  // No afecta al rendimiento, no funciona en producción
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
