import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products'
import { useContext, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config'
import { FiltersContext } from './context/filters'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'



function App() {
  const[products]=useState(initialProducts)

  const {filters, filterProducts} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </>
  )
}

export default App
