import React from "react";
import "./Product.css";

const Product = (props) => {
  // console.log(props);
  const { img, name, seller, price, stock } = props.product;

  return (
    <div className="product">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="product-details">
        <h4>{name}</h4>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>Only {stock} left in stock - Order Soon</small>
        </p>
        <button
          onClick={() => props.productHandler(props.product)}
          className="mainBtn"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
