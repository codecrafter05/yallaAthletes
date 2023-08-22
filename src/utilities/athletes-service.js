import * as athleteAPI from './athletes-api';

export async function create(athleteData) {
  return athleteAPI.create(athleteData);
}

export async function getAthlete() {
  return athleteAPI.getAthlete();
}

export async function getAllApprovedAthletes() {
  return athleteAPI.getAllApprovedAthletes();
}

export async function showAthleteDetails(athleteId) {
  return athleteAPI.showAthleteDetails(athleteId);
}

export async function deleteAthlete() {
  return athleteAPI.deleteAthlete();
}