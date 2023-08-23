import sendRequest from "./send-request";

const BASE_URL = '/api/athletes';

export async function create(athleteData) {
  return sendRequest(BASE_URL, 'POST', athleteData);
}

export async function getAthlete() {
  return sendRequest(BASE_URL);
}

export async function getAllAthletesFiltered(status) {
  return sendRequest(`${BASE_URL}/getAll/${status}`);
}

export async function deleteAthlete() {
  return sendRequest(BASE_URL, 'DELETE');
}

export async function showAthleteDetails(athleteId) {
  return sendRequest(`${BASE_URL}/${athleteId}`);
}

export async function approveAthlete(athleteId) {
  return sendRequest(`${BASE_URL}/approveAthlete/${athleteId}`, 'PUT');
}

export async function rejectAthlete(athleteId) {
  return sendRequest(`${BASE_URL}/rejectAthlete/${athleteId}`, 'PUT');
}

export async function removeAthlete(athleteId) {
  return sendRequest(`${BASE_URL}/removeAthlete/${athleteId}`, 'PUT');
}
