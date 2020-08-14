import React from "react";
import Product from "./Product";
import "./ProductGrid.css";

function ProductGrid({ products, handleEditProduct }) {
  return (
    <div className="product-grid-container">
      {products && products.length
        ? products.map((product) => {
            return (
              <Product
                product={product}
                key={product._id}
                handleEditProduct={handleEditProduct}
              />
            );
          })
        : null}
    </div>
  );
}

export default ProductGrid;
