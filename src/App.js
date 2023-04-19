import { Fragment,useEffect } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import { calculateTotal } from "./features/cart/cartSlice";
import { useSelector,useDispatch } from "react-redux";
import Modal from "./components/Modal";
function App() {
  const cartItem=useSelector((state)=>state.cart.cartItems)
  const modalToggle=useSelector((state)=>state.modal.isOpen)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(calculateTotal())
  },[cartItem,dispatch])
  return (
    <Fragment>
      <main>
        {modalToggle&&<Modal/>}

        <Navbar />
        <Cart />
      </main>
    </Fragment>
  );
}
export default App;
