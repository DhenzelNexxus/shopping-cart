import React, { useContext } from 'react';
import './Cart.css';
import CartItem from '../CartItem/CartItem';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';

function Cart() {
  const { cartItems, isCartVisible, navigate, ScreenTokens } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.price + acc, 0);

  const toOrderScreen = () => {
    if (totalPrice > 0) {
      navigate('/order-' + ScreenTokens.Order);
    }else {
      alert('Não há produtos no carrinho');
    }
  };

  return (
    <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
      <div className="cart-items">
        { cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} remove_button={true} />) }
      </div>

      <div className="cart-resume">{formatCurrency(totalPrice, 'BRL')}</div>
      <div className="div-order-button">
        <button className="order-button" type="button" onClick={() => toOrderScreen()}>Fazer Pedido</button>
      </div>
      
    </section>
  );
}

export default Cart;
