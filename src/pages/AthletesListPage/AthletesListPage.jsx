import { useState, useEffect } from "react";
import AthleteCard from "../../components/AthleteCard/AthleteCard";
import { getAllApprovedAthletes } from "../../utilities/athletes-service";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AthleteListPage() {
  const [athletes, setAthletes] = useState([]);

  useEffect(() => {
    fetchApprovedAthletes();
  }, []);

  const fetchApprovedAthletes = async () => {
    try {
      const response = await getAllApprovedAthletes();
      setAthletes(response);
    } catch (error) {
      console.error("Error fetching approved athletes:", error);
    }
  };

  return (
    <Container>
      <h1>Athlete List Page</h1>
      <hr />
      <Grid container spacing={2} sx={{mt:2}}>
        {athletes.map((athlete) => {
            return (
              <Grid key={athlete._id} item xs={12} sm={6} md={4} lg={3}>
                <AthleteCard athlete={athlete} />
              </Grid>
            );
        })}
      </Grid>
    </Container>
  );
}
