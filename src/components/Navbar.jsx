import React from 'react'
import {CartIcon} from '../icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const amount=useSelector((store)=>{
    return store.cart.totalAmount
  })
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux toolkit</h3>
        <CartIcon/>
        <div className="amount-container">
          <p className="total-amount">{amount}</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar