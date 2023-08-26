import { useState, useEffect } from "react";

import { getAllAthletesFiltered } from '../../utilities/athletes-service';
import { Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'; // Import Typography from Material-UI


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



      <Grid container spacing={3}>
        {athletes.map((athlete) => (
          <Grid key={athlete._id} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{
              maxWidth: 230, height: 290,
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={athlete.photo}
                  alt="green iguana"

                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {athlete.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Nationality: {athlete.nationality}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );

}
