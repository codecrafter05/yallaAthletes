import { useState, useEffect } from "react";
import AthleteCard from "../../components/AthleteCard/AthleteCard";
import { getAllAthletesFiltered } from '../../utilities/athletes-service';
import { Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { createOffer } from "../../utilities/offers-api";

export default function AthleteListPage() {
  const initialOfferData = {
    bid: '20',
    status: 'pending'
  };

  const [athletes, setAthletes] = useState([]);
  const [offerData, setOfferData] = useState(initialOfferData);


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
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const offer = await createOffer(offerData);
      console.log('New bid:', offer);
      setOfferData(initialOfferData);
    } catch (err) {
      console.error('Error creating a bid:', err);
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
                <form onChange={handleSubmit}>
                <TextField
                    type="number"
                    label="Bid"
                    name="bid"
                    inputProps={{ min: "20", max: "50" }}
                    sx={{mt:1}} 
                    // onChange={handleChange}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                  </form>
              </Grid>
            );
        })}
      </Grid>
    </Container>
  );
}
