import React from "react";
import { Card, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import "./AthleteCard.css";

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  let num = getRandomNumber(250, 400);

export default function AthleteCard({ athlete }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`/athletes/${athlete.user}`} className="card-link">
        <Card className="athlete-card"
        style={{
            backgroundImage: `url('https://picsum.photos/${num}')`,
            backgroundAlt: `${athlete.user}`,
          }}>
          <div className="overlay">
            <Typography variant="h6" component="h2" className="athlete-name">
              {athlete.user.firstName}
            </Typography>
            <Typography className="sport-type">
              Sport: {athlete.sportType}
            </Typography>
          </div>
        </Card>
      </Link>
    </Grid>
  );
}
