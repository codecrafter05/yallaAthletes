import sendRequest from "./send-request";

const BASE_URL = '/api/products';

export async function createA_Product(productData) {
  return sendRequest(BASE_URL, 'POST', productData);
}