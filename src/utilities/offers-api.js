import sendRequest from "./send-request";

const BASE_URL = '/api/offers';

export async function createOffer(offerData) {
  return sendRequest(BASE_URL, 'POST', offerData);
}