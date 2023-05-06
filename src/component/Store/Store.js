import React from "react";
import "./Store.css";
import Card from "../UI/Card";
import { productsArr } from "../Context/CartProvider";



const Store = () => {
  return (
    <div className="row justify-content-evenly">
      {productsArr.map((item) => {
        return (
          <div key={item.id}
            className="col-md-5  mt-4">
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              imageUrl={item.imageUrl}
              price={item.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Store;
