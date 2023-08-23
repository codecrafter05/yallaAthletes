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
