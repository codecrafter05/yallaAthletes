import * as productsAPI from './offers-api';

export async function createOffer(offerData) {
  return productsAPI.createOffer(offerData);
}