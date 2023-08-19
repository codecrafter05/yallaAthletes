import React from "react";
import Typography from '@mui/material/Typography';
import bgImage from '../../assets/bg.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';



export default function HomePage() {

  return (
    <>
      <article
        className='article'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Typography variant="h2" className='head'>yallaAthletes</Typography>
      </article>
      <Card className="boxContainer">
        <CardActionArea component={Link} to='/athletes'>
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Athletes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/products'>
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Products
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/news' className="box large-box" >
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              News
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}