Prueba técnica para Juniors y Trainees de React en Live Coding.
APIs:

Facts Random: https://catfact.ninja/fact

Imagen random: https://cataas.com/cat/says/hello

Recupera un hecho aleatorio de gatos de la primera API

Recuperar la primera palabra del hecho

Muestra una imagen de un gato con la primera palabra.


PARA PASAR PROYECTO DE VANILLA A REACT:

*plugin de vite:
npm install @vitejs/plugin-react -E

*Instalamos dependecias: react, react-dom
npm install react react-dom -E

*creamos fichero configuración vite:
vite.config.js

*En ese fichero incluimos:
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

*Hacer el punto de entrada de la aplicación:
- En el index.html, hay un script que es el que se carga al ppio, que es el main.js
- El main.js es el punto de entrada de la aplicación

*en el main.js, como es el punto de entrada, ¿cómo iniciamos una aplicación con react?
como es el primer fichero que se va a cargar de nuestra aplicación, importamos del react-dom el createRoot
y con el createRoot me hago un document.getElementById donde quiero renderizar mi aplicación, que mirando el html tengo el div con id="app"

import { createRoot } from 'react-dom/client'
import { App } from './src/App'

const root = createRoot(document.getElementById('app'))

root.render(<App />)

*Cambiar la extensión del main a jsx
y cambiarlo también en el html


INSTALACION LINTER:
npm install standard -D

y en el package.json:
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }

  más info: https://www.cesarguerra.mx/configuracion-rapida-de-eslint-con-standard-js-para-proyectos-de-javascript-y-de-react-con-vite-js/
