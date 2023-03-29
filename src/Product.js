import React from "react";
import "./Product.css";

function Product({ title, image }) {
  return (
    <div className="product">
      <p className="product__title">{title}</p>
      <img src={image} alt="product-image" />
      <a href="#">See more</a>
    </div>
  );
}

export default Product;
