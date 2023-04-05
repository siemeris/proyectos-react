import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'
import { useFilters } from './hooks/useFilters'



function App() {
  const[products]=useState(initialProducts)

  const {filters, filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  )
}

export default App
