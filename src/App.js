import { Fragment } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  return <Fragment>
    <main>
      <Navbar/>
      <Cart/>
    </main>
  </Fragment>;
}
export default App;
