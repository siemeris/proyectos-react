import { useId } from "react";
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons";
import './Cart.css'

export function Cart() {
    const cartCheckboxId = useId()

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                {/* <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul> */}
                <li>
                    <img
                        src="https://i.dummyjson.com/data/products/30/thumbnail.jpg"
                        alt="Iphone"
                    />
                    <div>
                        <strong>Iphone</strong> - $ 300
                    </div>

                    <footer>
                        <small>
                            Qty: 1
                        </small>
                        <button >+</button>
                    </footer>
                </li>

                <button>
                    <ClearCartIcon />
                </button>
            </aside>



        </>
    )
}
