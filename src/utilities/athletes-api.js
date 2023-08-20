import sendRequest from "./send-request";

const BASE_URL = '/api/athletes';

export async function create(athleteData) {
  return sendRequest(BASE_URL, 'POST', athleteData);
}

export async function getAthlete() {
  return sendRequest(BASE_URL);
}