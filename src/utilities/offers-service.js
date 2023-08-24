import * as offersAPI from './offers-api';

export async function createOffer(offerData) {
  return offersAPI.createOffer(offerData);
}