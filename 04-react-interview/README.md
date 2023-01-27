
React desde Vanilla, sin template de React

Creamos punto de entrada para proyecto  React

1. Installar plugin de vite:

`npm install @vitejs/plugin-react -E`

2. Instalar dependencias React

`npm install react react-dom -E`

3. creamos vite.config.js

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
```