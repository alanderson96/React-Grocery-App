import React from "react";
import "./Product.css";

function Product({ product, handleEditProduct }) {
  return (
    <div className="product-container">
      <img
        src={`./thumbnails/${product.imageUrl}`}
        alt={product.name}
        onError={(e) => (e.target.src = "./no-image.jpg")}
      />
      <div>{product.name}</div>
      <div>${product.price}</div>
      <button onClick={() => handleEditProduct(product)}>EDIT</button>
    </div>
  );
}

export default Product;
