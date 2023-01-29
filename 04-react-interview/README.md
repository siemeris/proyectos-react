
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

4. main.js

```
import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))

root.render(<h1>Hello, world!</h1>)

```

5. main.js --> main.jsx

6. En index.html, cambiar:
  <script type="module" src="/main.js"></script>
 por
  <script type="module" src="/main.jsx"></script>

7. Instalar Eslint:
`npm install standard -D`

y en package.json:
```
  "eslintConfig": {
    "extends": "./node_modules/standard/eslintrc.json"
  }
```

8. Creamos src/App.jsx y lo importamos en el main.jsx


Para el testing

```
npm init playwright@latest

```
