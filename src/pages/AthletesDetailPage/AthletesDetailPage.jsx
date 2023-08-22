import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import { showAthleteDetails } from '../../utilities/athletes-service';

export default function AthletesDetailsPage() {
  const { athleteId } = useParams();
  const [athleteDetails, setAthleteDetails] = useState(null);

  useEffect(() => {
    fetchAthleteDetails(athleteId);
  }, [athleteId]);

  const fetchAthleteDetails = async (athleteId) => {
    try {
      const response = await showAthleteDetails(athleteId);
      setAthleteDetails(response);
    } catch (error) {
      console.error("Error fetching athlete details:", error);
    }
  }

  console.log("Athlete ID:", athleteId);
  console.log("Athlete Details:", athleteDetails);

  return (
    <Container>
      <h1>Athletes Details Page</h1>
      <hr />
      {athleteDetails && (
        <div>
          <p>First Name: {athleteDetails.user?.firstName}</p>
          <p>Last Name: {athleteDetails.user?.lastName}</p>
          <p>Email: {athleteDetails.user?.email}</p>
          {/* Display other user details here */}
        </div>
      )}
    </Container>
  );
}
