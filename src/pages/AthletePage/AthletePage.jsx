import React from 'react';
import { Container, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import './AtleteTransition.css'

export default function AthletePage() {
  const athletes = [
    {
      name: 'Athlete 1',
      nationality: 'Country 1',
      image: 'path/to/image1.jpg',
    },
    {
      name: 'Athlete 2',
      nationality: 'Country 2',
      image: 'path/to/image2.jpg',
    },
    {
      name: 'Athlete 3',
      nationality: 'Country 3',
      image: 'path/to/image3.jpg',
    },
    // Add more athletes as needed
  ];

  return (
    <><Container> <h1>Athletes Page</h1>
      <Divider />
      <Box sx={{ flexGrow: 1, margin: "5%" }}>
        <Grid container spacing={3}>
          {athletes.map((athlete, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index} sx={{}}>
              <Card className="card-container">
                <div className="card-wrapper">
                  <Link className="links" to="#">
                    <CardMedia
                      component="img"
                      className="card-image"
                      image={athlete.image}
                      alt={`image for ${athlete.name}`}
                    />
                    <CardContent className="card-content">
                      <Typography variant="body2" color="textSecondary" component="p" className="card-name">
                        {athlete.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                        {athlete.nationality}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Link>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box></Container></>



  );
}