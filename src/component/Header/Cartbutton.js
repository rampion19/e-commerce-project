import React, {useContext} from "react";
import "./Cart.css";
import CartContext from "../Context/CartContext";

const Cartbutton = (props) => {

  const ctx = useContext(CartContext);

  const numberofitemincart = ctx.items.reduce((prvdata, item) => {
    return prvdata + item.amount;
  }, 0);

  return (
    <div className="row">
      <div className="col-12">
        <button onClick={props.onshowing} id="cart-btn">
          CART
        </button>
        <span id="counter">{numberofitemincart}</span>
      </div>
    </div>
  );
};
export default Cartbutton;