import React from "react";
import "./AddEditProductForm.css";
import categories from "../categories.json";

function AddEditProductForm({
  handleCloseModal,
  handleCreateProduct,
  existingProduct,
  handleUpdateProduct,
  handleDeleteProduct,
}) {
  const [name, setName] = React.useState(
    existingProduct ? existingProduct.name : ""
  );
  const [price, setPrice] = React.useState(
    existingProduct ? existingProduct.price : 0
  );
  const [category, setCategory] = React.useState(
    existingProduct ? existingProduct.category : ""
  );
  const [errors, setErrors] = React.useState({
    name: null,
    price: null,
    category: null,
  });

  function handleSubmit(event) {
    event.preventDefault();

    const errors = {
      name: null,
      price: null,
      category: null,
    };

    if (name.length === 0) {
      errors.name = "Product Name Cannon be Empty";
    }
    if (price <= 0) {
      errors.price = "Product Price Must Be Greater than 0";
    }
    if (!category || category === "all") {
      errors.category = "Product Category Must not be Empty or All";
    }
    if (errors.name || errors.price || errors.category) {
      setErrors(errors);
      return;
    }
    const product = {
      name: name,
      price: price,
      category: category,
    };
    if (existingProduct) {
      product._id = existingProduct._id;
      handleUpdateProduct(product);
    } else {
      handleCreateProduct(product);
    }
  }
  return (
    <div className="add-edit-product-form-container">
      <h1>{existingProduct ? "Edit Product" : "Add Product"}</h1>
      <form onSubmit={handleSubmit} className="product-form">
        <label>
          Name<span className="required">*</span>:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={errors.name ? "invalid" : ""}
          />
          {errors.name ? <span className="required">{errors.name}</span> : null}
        </label>
        <label>
          Price<span className="required">*</span>:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className={errors.price ? "invalid" : ""}
          />
          {errors.price ? (
            <span className="required">{errors.price}</span>
          ) : null}
        </label>
        <label>
          Category<span className="required">*</span>:
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            {categories.map((category) => {
              return (
                <option value={category.value} key={category.value}>
                  {category.label}
                </option>
              );
            })}
          </select>
          {errors.category ? (
            <span className="required">{errors.category}</span>
          ) : null}
        </label>
        <button>{existingProduct ? "Save & Close" : "Create & Close"}</button>
      </form>
      <button onClick={handleCloseModal}>CLOSE</button>
      {existingProduct ? (
        <button onClick={() => handleDeleteProduct(existingProduct)}>
          DELETE
        </button>
      ) : null}
    </div>
  );
}
export default AddEditProductForm;
