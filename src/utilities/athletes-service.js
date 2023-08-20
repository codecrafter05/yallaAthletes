import * as athleteAPI from './athletes-api';

export async function create(athleteData) {
  return athleteAPI.create(athleteData);
}

// fetch data of logged in athlete
export async function getAthlete() {
  return athleteAPI.getAthlete();
}

// export async function getAthlete() {
//   try {
//     const athlete = await athleteAPI.getAthlete();
//     return athlete;
//   } catch (error) {
//     console.error('Error fetching athlete data:', error);
//     throw new Error(error);
//   }
// }

