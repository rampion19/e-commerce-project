import React, { useContext, useState } from "react";
import Header from './component/Header/Header'
import Brand from './component/Brand/Brand'
import StoreItem from "./component/Store/StoreItem";
import CartContent from './component/Cart/CartContent'
import CartProvider, { productsArr } from "./component/Context/CartProvider";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./component/Home/Home";
import About from "./component/About/About";
import Contact from "./component/Contact Us/Contact";
import ProductDetail from "./component/Product Detail/ProductDetail";
import AuthPage from "./component/Authentication/AuthPage";
import AuthContext from "./component/Authentication/AuthContext";


function App(props) {

  const authCtx = useContext(AuthContext);
  const [cartdisplay, setcart] = useState(false);

  const cartbuttonhandler = () => {
    setcart(true);
  };
  const cartclosebuttonhandler = () => {
    setcart(false);
  };
  return (
    <React.Fragment>
      {!authCtx.isLoggedIn && <AuthPage />}
      {authCtx.isLoggedIn &&
        (<div className="container-fluid">
          <CartProvider>
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
              {productsArr.map(item => {
                return (
                  <Route key={item.id} path={`/productdetails/${item.id}`}>
                    <ProductDetail
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      imageUrl={item.imageUrl}
                      price={item.price} />
                  </Route>
                )
              })}

            </Switch>
          </CartProvider>
        </div>)}

    </React.Fragment>
  );

}
export default App;