import './Products.css';
import { AddToCartIcon } from './Icons';

export function Products({ products }) {
  return (
    <main className='products'>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div className='product'>
              <img src={product.thumbnail} alt={product.title} />
              <div className='product-info'>
                <h3>{product.title}</h3>
                <span>${product.price}</span>
              </div>
              <button>
                <AddToCartIcon />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}