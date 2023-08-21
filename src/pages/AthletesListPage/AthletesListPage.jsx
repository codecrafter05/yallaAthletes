import React, { useState, useEffect } from "react";
import AthleteCard from "../../components/AthleteCard/AthleteCard";
import { getAllApprovedAthletes } from "../../utilities/athletes-service";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function AthleteListPage() {
  const [athletes, setAthletes] = useState({});

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
      <Typography variant="h4" gutterBottom>
        Athlete Page
      </Typography>
      <hr />
      <Grid container spacing={2}>
        {Object.keys(athletes).map((athleteId) => {
          const athlete = athletes[athleteId];
          return (
            <Grid key={athleteId} item xs={12} sm={6} md={4} lg={3}>
              <AthleteCard athlete={athlete} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
