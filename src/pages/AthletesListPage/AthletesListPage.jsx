import { useState, useEffect } from "react";
import { getAllAthletesFiltered } from '../../utilities/athletes-service';
import { getImageForUser } from '../../utilities/userImage-service';
import { Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'; // Import Typography from Material-UI
import { Link } from "react-router-dom";

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
      <Typography variant="h2" sx={{ mt: 4, mb: 5 }}>
        Athletes Page
      </Typography>



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
                <Link to={`/athletes/${athlete._id}`} style={{ textDecoration: "none", color: 'black' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={athlete.photo}
                    alt="green iguana"
                  />

                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      Name: {athlete.user.firstName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Nationality: {athlete.user.nationality}
                    </Typography>

                  </CardContent>
                </Link>
              </CardActionArea>

            </Card>
          </Grid>
        ))}
      </Grid>

    </Container>
  );

}
