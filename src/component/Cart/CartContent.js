import React from "react";
import Modal from "../UI/Modal";
import "./CartContent.css";
import CartItem from "./CartItem";

const cartElements = [
  {
    title: "Colors blue red black",
    id: "e1",
    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",
    id: "e2",
    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",
    id: "e3",
    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const CartContent = (props) => {

  const cartitem = cartElements.map((item) => {
    return (
      <div key={item.id} className="cartitem">
        <CartItem
          imageUrl={item.imageUrl}
          price={item.price}
          title={item.title}
        />
      </div>
    );
  });

  return (
    <div className="row  justify-content-evenly">
      <Modal>
        <div className="col-12">
          <div className="head">
            <h1>CART</h1>
            <button
              onClick={props.onremove}
              id="remove"
              className="btn btn-outline-danger"
            >X
            </button>
          </div>
          <div className="cart">
            <h3 className="bordera">ITEM</h3>
            <h3 className="bordera">PRICE</h3>
            <h3 className="bordera">QUANTITY</h3>
          </div>
          {cartitem}
        </div>
      </Modal>
    </div>
  );
};

export default CartContent;