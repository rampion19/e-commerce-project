import React, { useState } from "react";
import Header from './component/Header/Header'
import Brand from './component/Brand/Brand'
import StoreItem from "./component/Store/StoreItem";
import CartContent from './component/Cart/CartContent'
import CartProvider from "./component/Context/CartProvider";

function App() {
  const [cartdisplay, setcart] = useState(false);

  const cartbuttonhandler = () => {
    setcart(true);
  };
  const cartclosebuttonhandler = () => {
    setcart(false);
  };
  return (
    <CartProvider>
      <div className="container-fluid">
        <Header onshow={cartbuttonhandler} />
        <Brand />
        {cartdisplay && <CartContent onremove={cartclosebuttonhandler} />}
          <StoreItem />
      </div>
    </CartProvider>
  );

}
export default App;