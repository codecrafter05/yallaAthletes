import React from "react";
import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import './AthleteCard.css'
import { CardActionArea, CardContent } from "@mui/material";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let num = getRandomNumber(250, 400);

export default function AthleteCard({ athlete }) {
  return (
    <Grid item >

      <Card sx={{
        maxWidth: 230, height: 290,
        transition: 'transform 0.2s ease',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}>   <Link to={`/athletes/${athlete._id}`} >
          <CardActionArea>
            {/* <CardMedia
                  component="img"
                  height="200"
                  image={product.photo}
                  alt="green iguana"

                /> */}

            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {athlete.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nationality: {athlete.nationality}
              </Typography>
            </CardContent>
          </CardActionArea></Link>
      </Card>

    </Grid>
  );
}