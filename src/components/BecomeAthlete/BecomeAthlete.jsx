import { create } from '../../utilities/athletes-service'; // Import the createAthlete function
import { useState } from 'react';
import { Card, CardContent, TextField, Button, Grid } from '@mui/material';

export default function BecomeAthlete({ user }) {
  const initialAthleteData = {
    user: user._id,
    sportType: '',
    personalRecord: '',
    height: '',
    weight: '',
    achievements: '',
    socials: '',
    status: 'Pending',
  };
  const [athleteData, setAthleteData] = useState(initialAthleteData);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setAthleteData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const athlete = await create(athleteData); // Call the create function
      console.log('New Athlete:', athlete);
      // Handle success, show a message, or redirect the user
      setAthleteData(initialAthleteData); // Reset form fields
    } catch (error) {
      console.error('Error creating athlete:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <h1>Become Athlete</h1>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Sport Type"
                variant="outlined"
                type="text"
                name="sportType"
                value={athleteData.sportType}
                onChange={handleChange}
                autoComplete='off'
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Height"
                variant="outlined"
                type="number"
                name="height"
                value={athleteData.height}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Weight"
                variant="outlined"
                type="number"
                name="weight"
                value={athleteData.weight}
                onChange={handleChange}
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Personal Record"
                variant="outlined"
                type="number"
                name="personalRecord"
                value={athleteData.personalRecord}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Socials"
                variant="outlined"
                type="text"
                name="socials"
                value={athleteData.socials}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Achievements"
                variant="outlined"
                name="achievements"
                value={athleteData.achievements}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" color='success' sx={{ mt: 3 }}>
            Yalla!
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
