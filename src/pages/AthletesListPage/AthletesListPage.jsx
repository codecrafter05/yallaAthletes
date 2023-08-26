import { useState, useEffect } from "react";
import AthleteCard from "../../components/AthleteCard/AthleteCard";
import { getAllAthletesFiltered } from '../../utilities/athletes-service';
import { getImageForUser } from '../../utilities/userImage-service';
import { Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography } from '@mui/material'; // Import Typography from Material-UI


export default function AthleteListPage() {


  const [athletes, setAthletes] = useState([]);



  useEffect(() => {
    async function fetchAthletes() {
      try {
        const response = await getAllAthletesFiltered('Approved'); // Fetch pending athletes
        console.log('Fetched athletes:', response);
        setAthletes(response); // Update the state with pending athletes' data
      } catch (error) {
        console.error('Error fetching athletes:', error);
      }
    }
    fetchAthletes();
  }, []);
  

  

  return (
    <Container>
      <h1>
        Athlete List Page
      </h1>
      <hr />
      <Grid container spacing={2} sx={{ mt: 2 }}>
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
