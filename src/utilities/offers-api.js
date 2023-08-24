import sendRequest from "./send-request";

const BASE_URL = '/api/offers';

export async function createOffer(offerData) {
  return sendRequest(BASE_URL, 'POST', offerData);
}

export async function getAllOffers(status) {
  return sendRequest(`${BASE_URL}/${status}`);
}