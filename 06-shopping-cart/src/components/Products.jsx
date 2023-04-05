import './Products.css'
import { AddToCartIcon } from './Icons.jsx'
import { CartProvider } from '../context/cart'
import { useCart } from '../hooks/useCart'
import { RemoveFromCartIcon } from './Icons.jsx'

export function Products({ products }) {

    const { addToCart, cart, removeFromCart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.slice(0, 10).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    
                    return (<li key={product.id}>
                        <img src={product.thumbnail} alt={product.title}></img>
                        <div>
                            <strong>{product.title}</strong> - $ {product.price}
                        </div>
                        <div>
                            <button style={{ backgroundColor: '#09f' }} onClick={() => isProductInCart ? removeFromCart(product) : addToCart(product)}>
                               {
                               isProductInCart ? 
                                <RemoveFromCartIcon />
                                :
                                <AddToCartIcon />
                               }
                            </button>
                        </div>
                    </li>)
                })}
            </ul>
        </main>
    )

}

