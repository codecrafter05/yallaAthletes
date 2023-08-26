import * as userImageAPI from './userImage-api';

export async function createImage(imageData) {
  return userImageAPI.createImage(imageData);
}

export async function getImageForLoggedInUser() {
  return userImageAPI.getImageForLoggedInUser();
}