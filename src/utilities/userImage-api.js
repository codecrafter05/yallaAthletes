import sendRequest from "./send-request";

const BASE_URL = '/api/userImage';

export async function createImage(imageData) {
  return sendRequest(BASE_URL, 'POST', imageData);
}

export async function getAllImages(imageData) {
  return sendRequest(BASE_URL, imageData);
}

export async function getImageForLoggedInUser() {
  return sendRequest(BASE_URL);
}

export async function getImageForUser(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export async function deleteImageForLoggedInUser() {
  return sendRequest(BASE_URL, 'DELETE');
}