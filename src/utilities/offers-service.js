import * as offersAPI from './offers-api';

export async function createOffer(offerData) {
  return offersAPI.createOffer(offerData);
}

export async function getAllOffers(status) {
  return offersAPI.getAllOffers(status);
}