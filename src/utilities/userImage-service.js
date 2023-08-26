import * as userImageAPI from './userImage-api';

export async function createImage(imageData) {
  return userImageAPI.createImage(imageData);
}