import {useState, useEffect } from "react"; 
import AthleteCard from "../../components/AthleteCard/AthleteCard";
import { Container } from "@mui/material";
import { getAllApprovedAthletes } from "../../utilities/athletes-service"; 

export default function AthletePage() {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    // Fetch the approved athletes when the component mounts
    fetchApprovedAthletes();
  }, []);

  const fetchApprovedAthletes = async () => {
    try {
      const response = await getAllApprovedAthletes();
      console.log(response);
      setAthletes(response.data); // Assuming the API response returns the athlete data
    } catch (error) {
      console.error("Error fetching approved athletes:", error);
    }
  };

  return (
    <Container>
      <h1>Athlete Page</h1>
      <hr />
      {athletes.map((athlete) => (
        <AthleteCard key={athlete._id} athlete={athlete} />
      ))}
    </Container>
  );
}