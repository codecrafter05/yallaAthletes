import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Paper, Typography, Card, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';
import { showAthleteDetails } from '../../utilities/athletes-service';
import { createOffer } from "../../utilities/offers-service";
import './AthletesDetailPage.css';
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { getImageForUser } from '../../utilities/userImage-service';


export default function AthletesDetailsPage({ user }) {
  const { athleteId } = useParams();
  const [athlete, setAthlete] = useState(null);
  const [images, setImages] = useState([])

  const initialOfferData = {
    user: user._id,
    athlete: '',
    athleteName: '',
    athleteEmail: '',
    managerEmail: '',
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
        athlete: athlete.user?._id,
        athleteName: `${athlete.user.firstName} ${athlete.user.lastName}`,
        athleteEmail: athlete.user?.email,
        managerEmail: user.email,
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

  async function fetchAthletesImage(userId) {
    try {
      const response = await getImageForUser(userId);
      setImages(response);
    } catch (error) {
      console.error('Error fetching Image:', error);
    }
  }

  const fetchAthleteDetails = async (athleteId) => {
    try {
      const response = await showAthleteDetails(athleteId);
      setAthlete(response);
      fetchAthletesImage(response.user._id);
    } catch (error) {
      console.error("Error fetching athlete details:", error);
    }
  }

  useEffect(() => {
    fetchAthleteDetails(athleteId);// console.log(`This is working`)
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
    <Container className='allbox' style={{ width: '100%' }}>

      {athlete ? (
        <>
          <Paper elevation={10} style={{ padding: '15px', marginTop: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Athlete Details
            </Typography>
          </Paper>

          <div
            style={{
              className: "boxme",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              // margin: 'auto',
              width: '100%',
            }}
          >



            <Card style={{ display: 'flex', margin: '20px', alignItems: 'center', borderRadius: '20px', padding: '20px', width: '100%' }}>
              <div
                style={{
                  backgroundImage: `url(${images.photo})`, // Use image.photo for the photo URL
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  width: '270px',
                  height: '300px',
                  borderRadius: '10%',
                  overflow: 'hidden',
                  marginLeft: '8%',
                  marginRight: '5%',
                }}
              ></div>




              <div style={{ display: 'flex', flexDirection: 'column', color: 'black', padding: '1%', margin: 'outo' }}>
                <div className="info-row" style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginBottom: '1px' }}>
                  <div className="info-box1">
                    <Typography variant="subtitle1"> {athlete.user.firstName} {athlete.user.lastName} </Typography>
                  </div>
                </div>

                <div className="info-row" style={{ background: 'rgba(180, 180, 180, 0.5)', padding: '10px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 auto', marginBottom: '20px' }}>
                  <Typography variant="subtitle1" style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
                    <strong>Sport Type:</strong> {athlete.sportType}
                    <br />
                    <strong>P.R:</strong> {athlete.personalRecord}
                  </Typography>
                </div>


                <div style={{ borderTop: "2px dashed rgba(180, 180, 180, 0.5) ", marginLeft: 20, marginRight: 20 }}></div>

                <div className="info-box" style={{ width: '100%', margin: 'auto', padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '20px', marginBottom: '0%' }}>
                  <div className="info-row">
                    <Typography variant="h6">  <strong>Age:</strong> {calculateAge(athlete.user?.dateOfBirth)}<br /><strong>Nationality</strong> {athlete.user.nationality}<br />
                      <strong>DOB:</strong> {athlete.user.dateOfBirth} <br />

                      <strong>Height:</strong> {athlete.height} cm <br />
                      <strong>Weight:</strong> {athlete.weight} kg</Typography>
                  </div>
                </div>




                <div style={{ borderTop: "2px dashed rgba(180, 180, 180, 0.5) ", marginLeft: 20, marginRight: 20 }}></div>

                <div className="info-row" style={{ marginBottom: '20px' }}>
                  <div className="info-box-double" >
                    <Typography variant="h6">
                      <strong>Achievements:</strong>{athlete.achievements}<br />
                      <strong> Socials:</strong> {athlete.socials}
                    </Typography>
                  </div>
                </div>

              </div>

              <Container component="main" maxWidth="xs" sx={{ width: '50%' }}>

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
                    {/*   */}
                    <Typography component="h1" variant="h5">
                      <strong>Make Offer</strong>
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
            </Card>
          </div>

        </>
      ) : (
        <Typography>Loading athlete details...</Typography>
      )}
    </Container>

  );
}


