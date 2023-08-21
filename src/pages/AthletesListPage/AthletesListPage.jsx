import {useState, useEffect } from "react"; 
import AthleteCard from "../../components/AthleteCard/AthleteCard";
import { getAllApprovedAthletes } from "../../utilities/athletes-service"; 
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AthletePage() {
  const [athletes, setAthletes] = useState({}); // Initialize as an object

  useEffect(() => {
    fetchApprovedAthletes();
  }, []);

  const fetchApprovedAthletes = async () => {
    try {
      const response = await getAllApprovedAthletes();
      console.log(response);
      setAthletes(response);
    } catch (error) {
      console.error("Error fetching approved athletes:", error);
    }
  };

  return (
    <Container>
      <h1>Athlete Page</h1>
      <hr />
      <Grid container spacing={2}> {/* Create a responsive grid container */}
        {Object.keys(athletes).map((athleteId) => {
          const athlete = athletes[athleteId];
          return (
            <Grid key={athleteId} item xs={12} sm={6} md={4} lg={3}> {/* Adjust the grid item sizes for responsiveness */}
              <AthleteCard athlete={athlete} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
