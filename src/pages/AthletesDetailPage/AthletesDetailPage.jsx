import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper, Typography, Grid, Card, CardContent, TextField, Button } from '@mui/material';
import { showAthleteDetails } from '../../utilities/athletes-service';
import { createOffer } from "../../utilities/offers-api";


export default function AthletesDetailsPage() {
  const { athleteId } = useParams();
  const [athlete, setAthlete] = useState(null);
  // const [offerData, setOfferData] = useState(initialOfferData);

  // const initialOfferData = {
  //   bid: '20',
  //   status: 'pending'
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const offer = await createOffer(offerData);
  //     console.log('New bid:', offer);
  //     setOfferData(initialOfferData);
  //   } catch (err) {
  //     console.error('Error creating a bid:', err);
  //   }
  // };

  useEffect(() => {
    fetchAthleteDetails(athleteId);
  }, [athleteId]);

  const fetchAthleteDetails = async (athleteId) => {
    try {
      const response = await showAthleteDetails(athleteId);
      setAthlete(response);
    } catch (error) {
      console.error("Error fetching athlete details:", error);
    }
  }

  const calculateAge = (dateOfBirth) => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      return age - 1;
    }

    return age;
  };


  return (
    <>
    <Container>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Athlete Details
        </Typography>
      </Paper>
  
      {athlete ? (
        <Card style={{ display: 'flex', marginTop: '20px', alignItems: 'center', borderRadius: '20px', padding: '20px' }}>
          <div
            style={{
              backgroundImage: `url("https://www.themanual.com/wp-content/uploads/sites/9/2020/06/blue-raspberries.jpg?p=1")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              width: '300px',
              height: '300px',
              borderRadius: '10%',
              overflow: 'hidden',
              marginLeft: '20px',
              marginRight: '20px',
            }}
          ></div>
          <div style={{ display: 'flex', flexDirection: 'column',  color: 'blue', width: 'calc(100% - 240px)' }}>
            <div className="info-row">
              <div className="info-box">
                <Typography variant="subtitle1">Name:  {athlete.user?.firstName} {athlete.user?.lastName} </Typography>
              
                <Typography variant="subtitle1">Sport Type: {athlete.sportType} </Typography>
                
              </div>
              <div className="info-box">
                <Typography variant="subtitle1">Date of Birth: {athlete.user.dateOfBirth} </Typography>
                
                <Typography variant="subtitle1">Nationality: {athlete.user.nationality}</Typography>
                
              </div>
            </div>
            <div className="info-row">
              <div className="info-box">
                
                
                <Typography variant="subtitle1">Height: {athlete.height} cm </Typography>

                <Typography variant="subtitle1">Weight: {athlete.weight} kg</Typography>
                
              </div>
              <div className="info-box">
                
              <Typography variant="subtitle1">Age: {calculateAge(athlete.user?.dateOfBirth)}</Typography>

              <Typography variant="subtitle1">Personal Record: {athlete.personalRecord}</Typography>
                
              </div>
            </div>
            <div className="info-row">
              <div className="info-box-double">
                {/* <Typography variant="subtitle1">Achievements / Socials:</Typography> */}
                <Typography>
                
                Achievements: {athlete.achievements}<br />
                Socials: {athlete.socials}
                  
                </Typography>
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Card style={{ padding: '20px', borderRadius: '20px', backgroundColor: '#f0f0f0' }}>
          <Typography variant="h5" style={{ marginBottom: '10px' }}>
            No athlete data available.
          </Typography>
          <Typography>
            We apologize, but there is currently no data available for this athlete.
          </Typography>
        </Card>    
      </div>
      )} 
      </Container>
      <form onChange>
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
      <style>
        {`
        .info-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        
        .info-box {
          width: calc(50% - 10px);
          padding: 20px;
          border: 5px solid #ccc;
          border-top: none;
          border-left: none;
          border-radius: 4px;
        }
        
        .info-box-double {
          width: calc(100% - 10px);
          padding: 20px;
          border: 5px solid #ccc;
          border-top: none;
          border-left: none;
          border-radius: 4px;
        }
        `}
      </style>

</>


  );
  
  
  
  
  
  
  
  
  
  
  
}
