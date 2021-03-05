import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import { getDatabaseCart } from "../../utilities/databaseManager";
import Product from "../Product/Product";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Review.css";
import { removeFromDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeItem = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);
    const cartProducts = productKeys.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className="review-container">
      <div>
        {cart.map((pd) => (
          <ReviewItem removeItem={removeItem} item={pd}></ReviewItem>
        ))}
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Review;
