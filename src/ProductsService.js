import axios from "axios";

const BASE_URL = "https://grocery-api-alexis.herokuapp.com";

const getProducts = () => {
  return axios.get(`${BASE_URL}/api/products`);
};

const createProduct = (product) => {
  return axios.post(`${BASE_URL}/api/products`, product);
};

const updateProduct = (productId, product) => {
  return axios.put(`${BASE_URL}/api/products/${productId}`, product);
};

const deleteProduct = (productId) => {
  return axios.delete(`${BASE_URL}/api/products/${productId}`);
};

export { getProducts, createProduct, updateProduct, deleteProduct };
