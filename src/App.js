import { Fragment,useEffect } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { calculateTotal } from "./features/cart/cartSlice";
import { useSelector,useDispatch } from "react-redux";
function App() {
  const cartItem=useSelector((state)=>state.cart.cartItems)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItem,dispatch])
  return <Fragment>
    <main>
      <Navbar/>
      <Cart/>
    </main>
  </Fragment>;
}
export default App;
