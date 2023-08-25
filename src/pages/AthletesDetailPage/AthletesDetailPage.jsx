import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper, Typography, Card, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { showAthleteDetails } from '../../utilities/athletes-service';
import { createOffer } from "../../utilities/offers-service";
import './AthletesDetailPage.css';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AthletesDetailsPage({ user }) {
  const { athleteId } = useParams();
  const [athlete, setAthlete] = useState(null);
  const initialOfferData = {
    user: user._id,
    athlete: athleteId,
    athleteName: '',
    sportType: '',
    bid: '',
    description: '',
  };

  const [offerData, setOfferData] = useState(initialOfferData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const offer = await createOffer({
        user: offerData.user,
        athlete: offerData.athlete,
        athleteName: `${athlete.user.firstName} ${athlete.user.lastName}`,
        athleteAge: calculateAge(athlete.user?.dateOfBirth),
        sportType: athlete.sportType,
        bid: offerData.bid,
        description: offerData.description,
      });
      console.log('New offer:', offer);
      setOfferData(initialOfferData);
    } catch (err) {
      console.error('Error creating an offer:', err);
    }
  };

  const fetchAthleteDetails = async (athleteId) => {
    try {
      const response = await showAthleteDetails(athleteId);
      setAthlete(response);
    } catch (error) {
      console.error("Error fetching athlete details:", error);
    }
  }

  useEffect(() => {
    fetchAthleteDetails(athleteId);
  }, [athleteId]);

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
    <Container>
    {athlete ? (
      <>
        <Paper elevation={10} style={{ padding: '15px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
        Athlete Details
        </Typography>
        </Paper>

        <Container sx={{display: "flex"}}>    


        
         <Card style={{ display: 'flex', margin: '20px', alignItems: 'center', borderRadius: '20px', padding: '20px',width: '70%' }}>
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

          


<div style={{ display: 'flex', flexDirection: 'column', color: '#191D88', width: 'calc(100% - 240px)',padding: '1%' , margin: 'outo' }}>
  <div className="info-row" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: '1px' }}>
    <div className="info-box1">
      <Typography variant="subtitle1">{athlete.user.firstName} {athlete.user.lastName} </Typography>
      <Typography variant="subtitle1"> {athlete.user.nationality}</Typography>
    </div>
  </div>

  <div className="info-row" style={{ background: 'rgba(180, 180, 180, 0.5)', padding: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', maxWidth: '200px', margin: '0 auto', marginBottom: '20px' }}>
    <Typography variant="subtitle1" style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
    <strong>Sport Type:</strong> {athlete.sportType} 
      <EmojiEventsIcon style={{ fontSize: '18px' }} /> 
      {/* <EmojiEventsIcon style={{ fontSize: '18px' }} />  */}
      {/* <EmojiEventsIcon style={{ fontSize: '18px' }} />  */}
      <strong>Personal Record:</strong> {athlete.personalRecord}
    </Typography>
  </div>


  <div style={{ borderTop: "2px dashed rgba(180, 180, 180, 0.5) ", marginLeft: 20, marginRight: 20 }}></div>

  <div className="info-box" style={{ width: '80%', margin: 'auto', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '0%' }}>
  <div className="info-row">
    <Typography variant="subtitle1"> <strong>DOB:</strong> {athlete.user.dateOfBirth} </Typography>
    <Typography variant="subtitle1"><strong>Age:</strong> {calculateAge(athlete.user?.dateOfBirth)}</Typography>
  </div>
  <div className="info-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', alignItems: 'center' }}>
    <Typography variant="subtitle1"><strong>Height:</strong> {athlete.height} cm </Typography>
    <Typography variant="subtitle1"><strong>Weight:</strong> {athlete.weight} kg</Typography>
  </div>
</div>



  <div style={{ borderTop: "2px dashed rgba(180, 180, 180, 0.5) ", marginLeft: 20, marginRight: 20 }}></div>
      
  <div className="info-row" style={{ marginBottom: '20px' }}>
  <div className="info-box-double" >
    <Typography>
    <strong>Achievements:</strong>{athlete.achievements}<br />
    <strong> Socials:</strong> {athlete.socials}
    </Typography>
  </div>
</div>

</div>
</Card>






<Container component="main" maxWidth="xs">
      <CssBaseline />
      {user.role === 'Manager' && (
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 8,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3, width: '100%' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  label="Bid"
                  name="bid"
                  fullWidth
                  inputProps={{ min: 0 }}
                  onChange={(e) =>
                    setOfferData({
                      ...offerData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  sx={{ marginBottom: '10px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="text"
                  label="Description"
                  name="description"
                  fullWidth
                  onChange={(e) =>
                    setOfferData({
                      ...offerData,
                      [e.target.name]: e.target.value,
                    })
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="success"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Add Offer
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      )}
    </Container>

       
        </Container>
  
      </>
    ) : (
      <Typography>Loading athlete details...</Typography>
    )}
  </Container>
  
  );
}



{/* <div className="info-box">
        <Typography variant="subtitle1">Height: {athlete.height} cm </Typography>
        <Typography variant="subtitle1">Weight: {athlete.weight} kg</Typography>
      </div> */}
    
    {/* <div className="info-row">
      <div className="info-box">
        <Typography variant="subtitle1">Sport Type: {athlete.sportType} </Typography>
        <Typography variant="subtitle1">Personal Record: {athlete.personalRecord}</Typography>
      </div>
    </div> */}