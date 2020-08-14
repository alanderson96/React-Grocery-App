import React from "react";
import "./App.css";
import ProductGrid from "./components/ProductGrid";
import Modal from "./components/Modal";
import AddEditProductForm from "./components/AddEditProductForm";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./ProductsService";

function App() {
  const [products, setProducts] = React.useState(() => {
    fetchProducts();

    return [];
  });
  const [
    isShowingAddEditProductModal,
    setIsShowingAddEditProductModal,
  ] = React.useState(false);
  const [currentProduct, setCurrentProduct] = React.useState(null);
  function fetchProducts() {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        debugger;
      });
  }

  function handleAddProductClick() {
    setIsShowingAddEditProductModal(true);
  }
  function handleCloseModal() {
    setIsShowingAddEditProductModal(false);
  }
  function handleCreateProduct(product) {
    createProduct(product)
      .then((response) => {
        setIsShowingAddEditProductModal(false);
        alert("Succestfully Created New Item");
        fetchProducts();
      })
      .catch((error) => {
        alert(error);
      });
  }
  function handleEditProduct(product) {
    setCurrentProduct(product);
    setIsShowingAddEditProductModal(true);
  }
  function handleUpdateProduct(product) {
    updateProduct(product._id, product)
      .then((response) => {
        setIsShowingAddEditProductModal(false);
        alert("Successfully Updated Product");
        fetchProducts();
      })
      .catch((error) => {
        alert(error);
      });
  }
  function handleDeleteProduct(product) {
    deleteProduct(product._id)
      .then((response) => {
        setIsShowingAddEditProductModal(false);
        alert("Successfully Deleted Product");
        fetchProducts();
      })
      .catch((error) => {
        alert(error);
      });
  }
  return (
    <div className="App">
      <button onClick={handleAddProductClick}>CREATE NEW PRODUCTS</button>
      {isShowingAddEditProductModal ? (
        <Modal>
          <AddEditProductForm
            existingProduct={currentProduct}
            handleCloseModal={handleCloseModal}
            handleCreateProduct={handleCreateProduct}
            handleUpdateProduct={handleUpdateProduct}
            handleDeleteProduct={handleDeleteProduct}
          />
        </Modal>
      ) : null}

      <h1>React Grocery App</h1>
      <ProductGrid products={products} handleEditProduct={handleEditProduct} />
    </div>
  );
}

export default App;
