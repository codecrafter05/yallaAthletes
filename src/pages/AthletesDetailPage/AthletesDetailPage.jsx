import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { showAthleteDetails } from '../../utilities/athletes-service';

export default function AthletesDetailsPage() {
  const { athleteId } = useParams();
  const [ athlete, setAthlete] = useState(null);

  useEffect(() => {
    fetchAthleteDetails(athleteId);
  }, [athleteId]);

  const fetchAthleteDetails = async (athleteId) => {
    try {
      const response = await showAthleteDetails(athleteId);
      setAthlete(response);
    } catch (error) {
      console.error("Error fetching athlete details:", error);
    }
  }

  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      return age - 1;
    }

    return age;
  };

  // console.log("Athlete ID:", athleteId);
  // console.log("Athlete Details:", athlete);

  return (
    <Container>
      <h1>Athlete Details Page</h1>
      <hr />
      {athlete && (
        <div>
          <p>Name: {athlete.user?.firstName} {athlete.user?.lastName}</p>
          <p>Sport Type: {athlete.sportType}</p>
          <p>Date of Birth: {athlete.user.dateOfBirth}</p>
          <p>Nationality: {athlete.user.nationality}</p>
          <p>Age: {calculateAge(athlete.user?.dateOfBirth)}</p>
          <p>Height: {athlete.height} cm</p>
          <p>Weight: {athlete.weight} kg</p>
          <p>Personal Record: {athlete.personalRecord}</p>
          <p>Achievements: {athlete.achievements}</p>
          <p>Socials: {athlete.socials}</p>
        </div>
      )}
    </Container>
  );
}
