import React from 'react' 
import CartItem from './CartItem'
import { useSelector } from "react-redux";


const Cart = () => {
  const { cartItems, itemsQty, totalAmount } = useSelector(
    (state) => state.cart
  );
  if(itemsQty === 0) {
    return (
      <section className="cart">
        <header>
          <h2>Your bag</h2>
          <h4 className="empty-cart">is currently empty.</h4>
        </header>
      </section>
    )
  }
else{
  return (
    <section className='cart'>
      <header>
        <h2>Your bag</h2>
        <div>
          {" "}
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
        </div>
        <footer>
          <div className="cart-total">
            <hr />
            <h4>Total <span>${totalAmount}</span></h4>
          </div>
          <button className='btn clear-btn'>Clear Cart</button>
        </footer>
      </header>
    </section>
  );}
}

export default Cart