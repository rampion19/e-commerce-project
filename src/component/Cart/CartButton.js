import "./Cart.css";

const CartButton = (props) => {
  
  return (
    <div className="row">
      <div className="col-12">
        <button onClick={props.onshowing} id="cart-btn">
          cart
        </button>
        <span id="counter">0</span>
      </div>
    </div>
  );
};

export default CartButton;