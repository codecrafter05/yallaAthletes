import * as productsAPI from './products-api';

export async function createA_Product(productsData) {
  return productsAPI.createA_Product(productsData);
}

export async function getProduct() {
  return productsAPI.getProduct();
}

export async function deleteProduct() {
  return productsAPI.deleteProduct();
}