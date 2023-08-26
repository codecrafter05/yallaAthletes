import sendRequest from "./send-request";

const BASE_URL = '/api/userImage';

export async function createImage(imageData) {
  return sendRequest(BASE_URL, 'POST', imageData);
}

export async function getImageForLoggedInUser() {
  return sendRequest(BASE_URL);
}