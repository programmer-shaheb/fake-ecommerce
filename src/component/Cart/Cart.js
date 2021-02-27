import React from "react";

const Cart = (props) => {
  const price = props.cart;
  const totalPrice = price.reduce((total, current) => total + current.price, 0);

  let shipping = 12.99;
  if (props.cart.length == 0) {
    shipping = 0;
  } else if (totalPrice > 50) {
    shipping = 0;
  } else if (totalPrice > 15) {
    shipping = 4.99;
  }

  let totalPlusShipping = Math.floor(totalPrice + shipping);

  let tax = 0;
  tax = Math.floor(totalPrice * 0.1);

  return (
    <div>
      <h2>Order Summary</h2>
      <h3>items ordered: {props.cart.length}</h3>
      <h5>item(s) price: {totalPrice}</h5>
      <h5>shipping-handling: {shipping}</h5>
      <h5>Total Before Tax: {totalPlusShipping}</h5>
      <h5>Estimated Tax: {tax}</h5>
      <h2>Order Total: {totalPlusShipping + tax} </h2>
    </div>
  );
};

export default Cart;
