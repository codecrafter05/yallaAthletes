import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../../components/Newspagecomponents/Header';
import MainFeaturedPost from '../../components/Newspagecomponents/MainFeaturedPost';
import FeaturedPost from '../../components/Newspagecomponents/FeaturedPost';
import Main from '../../components/Newspagecomponents/Main';
import Sidebar from '../../components/Newspagecomponents/Sidebar';
import Footer from '../../components/Newspagecomponents/Footer';
import Typography from '@mui/material/Typography';
import bgImage from '../../assets/bg.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';




const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];



// const mainFeaturedPost = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageText: 'main image description',
//   linkText: 'Continue reading…',
// };

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];



// const sidebar = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Blog() {
  return (
    <>
 
    <ThemeProvider theme={defaultTheme}>
      <Container maxWidth="lg">
       
        <main>
             
    <article
        className='article'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Typography variant="h2" className='head'>Breaking News</Typography>
      </article>
      <Grid container spacing={3}>
  <Grid item xs={12} sm={10} md={9}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="300"
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
    </Card>
  </Grid>


  <Grid item xs={12} sm={10} md={3}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="400"
          image={bgImage}
          alt="green iguana"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Athletes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> */}
      </CardActionArea>
    </Card>
  </Grid>



  <Grid item xs={3} sm={6} md={6}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="350"
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
    </Card>
  </Grid>

  
  <Grid item xs={12} sm={6} md={3}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="300"
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
    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={3}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="220"
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
    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={3}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="200"
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
    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={3}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="180"
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
    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={6}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="170"
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
    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={6}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="150"
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
    </Card>
  </Grid>


  
  <Grid item xs={12} sm={10} md={6}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="150"
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
    </Card>
  </Grid>



  
</Grid>

        </main>
      </Container>
    
          <Footer
        title="Footer"
        description="Something here to give the footer a purpose!" />
{/* 
          <Sidebar
              // title={sidebar.title}
              // description={sidebar.description}
              archives={sidebar.archives}
              // social={sidebar.social}
          /> */}
    </ThemeProvider>
    </>
  );
}