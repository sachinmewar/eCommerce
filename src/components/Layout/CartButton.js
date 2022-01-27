import './CartButton.css';
import CartIcon from './CartIcon';

const CartButton = () => {
    return(
        <button className='cart-button'> 
           <span id='cartIcon'> <CartIcon /></span>
           <span id = 'totalItems'> 0 </span>
           <span id = 'cart'> Cart </span>
        </button>
    );
}

export default CartButton;