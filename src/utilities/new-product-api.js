import sendRequest from "./send-request";
const BASE_URL = '/api/products';


export async function create(productData) {
  return sendRequest(`${BASE_URL}`, "POST", productData);
}