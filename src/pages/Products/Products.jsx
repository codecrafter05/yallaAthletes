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
import './products.css'
export default function Products() {
  const Products = [
    {
      name: 'Basketball',
      price: 'Basketball',
      image: 'https://example.com/basketball.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Football Shoes',
      price: 'Football',
      image: 'https://example.com/football_shoes.jpg',
      description: 'Bahraini',
    },
    {
      name: 'Tennis Racket',
      price: 'Tennis',
      image: 'https://example.com/tennis_racket.jpg',
      description: 'Indian',
    },
    {
      name: 'Running Shoes',
      price: 'Running',
      image: 'https://example.com/running_shoes.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Golf Clubs',
      price: 'Golf',
      image: 'https://example.com/golf_clubs.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Golf Clubs',
      price: 'Golf',
      image: 'https://example.com/golf_clubs.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Golf Clubs',
      price: 'Golf',
      image: 'https://example.com/golf_clubs.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
    // Add more sports products as needed
  ];

  return (
    <><Container> <h1>Products Page</h1>
      <Divider />
      <Box sx={{ flexGrow: 1, margin: "5%" }}>
        <Grid container spacing={3}>
          {Products.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={index} sx={{}}>
              <Card className="card-container">
                <div className="card-wrapper">
                  <Link className="links" to="#">
                    <CardMedia
                      component="img"
                      className="card-image"
                      image={product.image}
                      alt={`image for ${product.name}`}
                    />
                    <CardContent className="card-content">
                      <Typography variant="body2" color="textSecondary" component="p" className="card-name">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                        {product.price}
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



