import * as userImageAPI from './userImage-api';

export async function createImage(imageData) {
  return userImageAPI.createImage(imageData);
}

export async function getImageForLoggedInUser() {
  return userImageAPI.getImageForLoggedInUser();
}

export async function getImageForUser(id) {
  return userImageAPI.getImageForUser(id);
}

export async function deleteImageForLoggedInUser() {
  return userImageAPI.deleteImageForLoggedInUser();
}