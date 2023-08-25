import * as offersAPI from './offers-api';

export async function createOffer(offerData) {
  return offersAPI.createOffer(offerData);
}

export async function getAllOffers(status) {
  return offersAPI.getAllOffers(status);
}

export async function getAllManagerOffers(id, status) {
  return offersAPI.getAllManagerOffers(id, status);
}

export async function getAllAthleteOffers(id, status) {
  return offersAPI.getAllAthleteOffers(id, status);
}

export async function approveOffer(offerId) {
  return offersAPI.approveOffer(offerId);
}

export async function rejectOffer(offerId) {
  return offersAPI.rejectOffer(offerId);
} 

export async function removeOffer(offerId) {
  return offersAPI.removeOffer(offerId);
}