import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../../components/Newspagecomponents/Footer';
import vi1mp4 from '../../assets/vi1.mp4';
import ggImage from '../../assets/gg.jpg';
import prImage from '../../assets/pr.jpg';
import inImage from '../../assets/in.jpg';
import meImage from '../../assets/me.jpg';
import hamadImage from '../../assets/hamad.jpg';
import azizImage from '../../assets/aziz.jpg';
import abbasImage from '../../assets/abbas.jpg';


export default function HomePage() {


  return (
    <>
      <div className='video-container'>
        {/* <video className='video' autoPlay loop muted>
    <source src={vi1mp4} type='video/mp4' />
  </video> */}
        <Typography variant="h1" className="typography-overlay">
          yallaAthletes
        </Typography>
      </div>
      <Container>
      <div className="boxContainer">
        <Typography variant="h4">Check us out!</Typography>

        <div className="cards-container">
          <Card className="card-with-overlay">
            <CardActionArea component={Link} to='/athletes'>
              <div className="image-container">
                <CardMedia
                  component="img"
                  image={ggImage}
                  alt="green iguana"
                />
                <div className="overlay-text">
                  <Typography variant="h5" component="div">
                    Athlete
                  </Typography>

                </div>
              </div>
            </CardActionArea>
          </Card>

          <Card className="card-with-overlay">
            <CardActionArea component={Link} to='/products'>
              <div className="image-container">
                <CardMedia
                  component="img"
                  image={ggImage}
                  alt="green iguana"
                />
                <div className="overlay-text">
                  <Typography variant="h5" component="div">
                    Products
                  </Typography>

                </div>
              </div>
            </CardActionArea>
          </Card>

          <Card className="card-with-overlay">
            <CardActionArea component={Link} to='/news'>
              <div className="image-container">
                <CardMedia
                  component="img"
                  image={ggImage}
                  alt="green iguana"
                />
                <div className="overlay-text">
                  <Typography variant="h5" component="div">
                    News
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary">
              Stay updated on the latest local and global events...
            </Typography> */}
                </div>
              </div>
            </CardActionArea>
          </Card>
        </div>
      </div>




      <Typography variant="h4">About Us</Typography>


      <div className="flex-row-container">
        <Card className="card-with-flex">
          <CardMedia
            component="img"
            image={meImage}
            alt="green iguana"
            className="ms-image"
          />
          <CardContent className="us">
            <Typography gutterBottom variant="h5" component="div">
              Sayed Mustafa
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
            </Typography>
          </CardContent>
        </Card>

        <Card className="card-with-flex">
          <CardMedia
            component="img"
            image={azizImage}
            alt="green iguana"
            className="ms-image"
          />
          <CardContent className="us">
            <Typography gutterBottom variant="h5" component="div">
              Abdulaziz Hijris
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
            </Typography>
          </CardContent>
        </Card>

        <Card className="card-with-flex">
          <CardMedia
            component="img"
            image={hamadImage}
            alt="green iguana"
            className="ms-image"
          />
          <CardContent className="us">
            <Typography gutterBottom variant="h5" component="div">
              Hamad Alhibshi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
            </Typography>
          </CardContent>
        </Card>

        <Card className="card-with-flex">
          <CardMedia
            component="img"
            image={abbasImage}
            alt="green iguana"
            className="ms-image"
          />
          <CardContent className="us">
            <Typography gutterBottom variant="h5" component="div">
              Abbas Naser
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
            </Typography>
          </CardContent>
        </Card>
      </div>


      <Footer
        title="Unleash Your Potential, Conquer the Field"
        description="Calls for expansion and reaching your fullest potential in the sports arena.!" />
        </Container>
    </>
  )
}