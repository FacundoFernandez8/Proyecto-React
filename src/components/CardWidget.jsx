import cart from '../assets/bx-cart.svg';

export const CartWidget = () =>{
    return(
    <div id='cart-widget'>
    <img src={cart} alt="Cart"/>
    <span>999+</span>
    </div>
    )
}