import * as athleteAPI from './athletes-api';

export async function create(athleteData) {
  return athleteAPI.create(athleteData);
}

export async function getAthlete() {
  return athleteAPI.getAthlete();
}

export async function getAllAthletesFiltered(status) {
  return athleteAPI.getAllAthletesFiltered(status);
}

export async function showAthleteDetails(athleteId) {
  return athleteAPI.showAthleteDetails(athleteId);
}

export async function deleteAthlete() {
  return athleteAPI.deleteAthlete();
}

export async function approveAthlete(athleteId) {
  return athleteAPI.approveAthlete(athleteId);
}

export async function rejectAthlete(athleteId) {
  return athleteAPI.rejectAthlete(athleteId);
}

export async function removeAthlete(athleteId) {
  return athleteAPI.removeAthlete(athleteId);
}