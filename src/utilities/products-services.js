import * as productsAPI from './products-api';

export async function createA_Product(productsData) {
  return productsAPI.createA_Product(productsData);
}

export async function getProduct() {
  return productsAPI.getProduct();
}

export async function editProduct(productId, updatedData) {
  return productsAPI.editProduct(productId, updatedData);
}

export async function deleteProduct(productId) {
  return productsAPI.deleteProduct(productId);
}
