import React from "react";
import Cart from "../Cart/Cart";
import "./ReviewItem.css";

const ReviewItem = (props) => {
  console.log(props.item);
  const { name, price, quantity, key } = props.item;
  return (
    <>
      <h3>{name}</h3>
      <h5>$ {price}</h5>
      <h4>Quantity: {quantity}</h4>
      <button onClick={() => props.removeItem(key)}>Remove</button>
    </>
  );
};

export default ReviewItem;
