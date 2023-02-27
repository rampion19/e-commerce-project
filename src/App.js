import React, { useState } from "react";
import Header from './component/Header/Header'
import Brand from './component/Brand/Brand'
import StoreItem from "./component/Store/StoreItem";
import CartContent from './component/Cart/CartContent'
import CartProvider from "./component/Context/CartProvider";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact Us/Contact";

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
        <Switch>
        <Route path="/" exact>
        <Redirect to="/store" />
        </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/store">
            <StoreItem />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        {/* <StoreItem /> */}
      </div>
    </CartProvider>
  );

}
export default App;