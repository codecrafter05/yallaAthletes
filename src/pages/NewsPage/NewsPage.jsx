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
import tennisImage from '../../assets/tennis.jpg';
import sikelsImage from '../../assets/sikels.jpg';
import bascktballImage from '../../assets/bascktball.jpg';
import bbImage from '../../assets/bb.jpg';
import ddImage from '../../assets/dd.jpg';
import kkImage from '../../assets/kk.jpg';
import ttImage from '../../assets/tt.jpg';
import torImage from '../../assets/tor.jpg';
import vvImage from '../../assets/vv.jpg';
import ssImage from '../../assets/ss.jpg';
import nnImage from '../../assets/nn.jpg';

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
        style={{ backgroundImage: `url(${sikelsImage})` }}
      >
        <Typography variant="h2" className='head'>Breaking News</Typography>
      </article>
      <Grid container spacing={3}>
  <Grid item xs={12} sm={10} md={9}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="500"
          image={tennisImage}
          alt="green iguana"
          className="imageFitCover" 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Yoga
          </Typography>
          <Typography variant="body2" color="text.secondary">Yoga, an ancient art that harmonizes the body and mind, is recommended by doctors for its potential benefits in strengthening the body and calming the mind. Practicing yoga is considered a valuable option for achieving balance between the physical and spiritual aspects.
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
          height="630"
          image={bascktballImage}
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
          height="340"
          image={bbImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Michael
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The cycling champion, a symbol of determination and challenge, captivates the world with his remarkable achievements on the track. His heart beats with the spirit of competition and determination, as he pushes boundaries and tackles tough terrains with confidence. His history is filled with victories and challenges, making him a role model for youth aspiring to achieve success and break records.
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
          height="360"
          image={ddImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Mary
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Mary excels in the latest championship of the arena, which she contracted with one of the most prominent clubs in Europe.
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
          height="380"
          image={kkImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          David
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Coach David has proven his worth by training the youth and has been awarded the best coach in America.
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
          height="500"
          image={ttImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Sara
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Sara returns to the fields with skill and determination.
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
          height="500"
          image={torImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Tore
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Tore returns once again to climb the mountains.
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
          height="520"
          image={vvImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          Karen 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Karen retires from sports after a successful career.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>


  <Grid item xs={12} sm={6} md={7}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="700"
          image={nnImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Kides
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Determined children in sports pursue their aspirations with ambition.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>


  
  <Grid item xs={12} sm={10} md={5}>
    <Card className="boxContainerMustafa">
      <CardActionArea to='/athletes'>
        <CardMedia
          component="img"
          height="700"
          image={ssImage}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Linda
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Linda returns to social media platforms.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>



  
</Grid>

        </main>
      </Container>
    
          <Footer
        title="Unleash Your Potential, Conquer the Field"
        description="Calls for expansion and reaching your fullest potential in the sports arena.!" />
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