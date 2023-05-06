import React from "react";


const CartContext = React.createContext({

  items: [],
  TotalAmount: 0,
  AddItem: (item) => {},
  removeItem: (id) => {},
  email : ""
});

  
export default CartContext;