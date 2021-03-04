import React from "react";
import { useParams } from "react-router-dom";
import fakeData from "../../fakeData";
import Product from "../Product/Product";

const ProductDetail = () => {
  const { ProductKey } = useParams();
  const product = fakeData.find((pd) => pd.key === ProductKey);

  return (
    <div>
      <h3>Your Product Details</h3>
      <Product showAddToCart={false} product={product}></Product>
    </div>
  );
};

export default ProductDetail;
