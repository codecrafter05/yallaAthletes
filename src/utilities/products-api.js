import sendRequest from "./send-request";

const BASE_URL = '/api/products';

export async function createA_Product(productData) {
  return sendRequest(BASE_URL, 'POST', productData);
}

export async function getProduct() {
  return sendRequest(BASE_URL);
}

export async function editProduct(productId) {
  const url = `${BASE_URL}/${productId}`;
  return sendRequest(url, 'POST');
}

export async function deleteProduct(productId) {
  const url = `${BASE_URL}/${productId}`;
  return sendRequest(url, 'DELETE');
}
