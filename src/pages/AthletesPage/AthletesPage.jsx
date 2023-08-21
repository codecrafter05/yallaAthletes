import {useState, useEffect } from "react"; 
import AthleteCard from "../../components/AthleteCard/AthleteCard";
import { Container } from "@mui/material";
import { getAllApprovedAthletes } from "../../utilities/athletes-service"; 

export default function AthletePage() {
  const [athletes, setAthletes] = useState({}); // Initialize as an object

  useEffect(() => {
    fetchApprovedAthletes();
  }, []);

  const fetchApprovedAthletes = async () => {
    try {
      const response = await getAllApprovedAthletes();
      console.log(response);
      setAthletes(response); // Update the state with the entire response object
    } catch (error) {
      console.error("Error fetching approved athletes:", error);
    }
  };

  return (
    <Container>
      <h1>Athlete Page</h1>
      <hr />
      {Object.keys(athletes).map((athleteId) => (
        <div key={athleteId}>{athleteId}</div>
      ))}
      {/* {Object.keys(athletes).map((athleteId) => (
        <AthleteCard key={athleteId} athlete={athletes[athleteId]} />
      ))} */}
    </Container>
  );
}
