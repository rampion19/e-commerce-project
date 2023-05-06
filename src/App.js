import React, { useContext, useState, lazy, Suspense } from "react";
import Header from './component/Header/Header'
// import Brand from './component/Brand/Brand'
// import StoreItem from "./component/Store/StoreItem";
import CartContent from './component/Cart/CartContent'
import CartProvider, { productsArr } from "./component/Context/CartProvider";
import { Route, Switch, Redirect } from "react-router-dom";
// import Home from "./component/Home/Home";
// import About from "./component/About/About";
import Contact from "./component/Contact Us/Contact";
// import ProductDetail from "./component/Product Detail/ProductDetail";
// import AuthPage from "./component/Authentication/AuthPage";
import AuthContext from "./component/Authentication/AuthContext";

const Home = lazy(() => import('./component/Home/Home'));

const About = lazy(() => import('./component/About/About'));

const Brand = lazy(() => import('./component/Brand/Brand'));

const StoreItem = lazy(() => import("./component/Store/StoreItem"));

const ProductDetail = lazy(() => import("./component/Product Detail/ProductDetail"));

const AuthPage = lazy(() => import("./component/Authentication/AuthPage"));


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
      {!authCtx.isLoggedIn && <Route path="/">
        <Suspense fallback={<p>loading...</p>}>
          <AuthPage />
        </Suspense>
        </Route>}
      {authCtx.isLoggedIn &&
        (<div className="container-fluid">
          <CartProvider>
            <Header onshow={cartbuttonhandler} />
            <Suspense fallback={<p>loading...</p>}>
            <Brand />
            </Suspense>
            {cartdisplay && <CartContent onremove={cartclosebuttonhandler} />}
            <Switch>
              <Route path="/" exact>
                <Redirect to="/store" />
              </Route>
              <Route path="/home">
                <Suspense fallback={<p>loading...</p>}>
                  <Home />
                </Suspense>
              </Route>
              <Route path="/store">
                <Suspense fallback={<p>loading...</p>}>
                <StoreItem />
                </Suspense>
              </Route>
              <Route path="/about">
              <Suspense fallback={<p>loading...</p>}>
                <About />
                </Suspense>
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              {productsArr.map(item => {
                return (
                  <Route key={item.id} path={`/productdetails/${item.id}`}>
                    <Suspense fallback={<p>loading...</p>}>
                      <ProductDetail
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      imageUrl={item.imageUrl}
                      price={item.price} />
                      </Suspense>
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