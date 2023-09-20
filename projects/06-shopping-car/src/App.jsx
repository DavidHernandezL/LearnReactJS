import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Header } from './components/Header';

function App() {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({ category: 'all', minPrice: 0 });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && (
          filters.category === 'all' || product.category === filters.category
        )
      )
    })
  }

  return (
    <>
      <Header />
      <Products products={filterProducts(products)} />
    </>
  )
}

export default App
