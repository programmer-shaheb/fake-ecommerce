import React, { useState } from "react";
import fakeData from "../../fakeData";
import { addToDatabaseCart } from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);

  const productHandler = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    const sameProduct = newCart.filter((pd) => pd.key === item.key);
    const count = sameProduct.length;
    addToDatabaseCart(item.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        <ul>
          {products.map((product) => (
            <Product
              key={product.key}
              showAddToCart={true}
              productHandler={productHandler}
              product={product}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
