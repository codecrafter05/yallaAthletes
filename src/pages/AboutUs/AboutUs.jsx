
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea, Container } from '@mui/material';
// import { Link } from 'react-router-dom';
import Footer from '../../components/Newspagecomponents/Footer';
import meImage from '../../assets/me.jpg';
import hamadImage from '../../assets/hamad.jpg';
import azizImage from '../../assets/aziz.jpg';
import abbasImage from '../../assets/abbas.jpg';
import '../AboutUs/AboutUs.css';
import { Container, Divider } from '@mui/material';

export default function AboutUsPage() {
  // const cardStyles = {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   padding: '16px',
  //   borderRadius: '10px',
  // };

  return (
    <>
      <div className="aboutus">

        <Typography variant="h2" >
          Our Story

        </Typography>

      </div>



      <div className='allcontainers'>


        <Card className='midel'>
          <CardContent className="uper-us">
            <div className="sps">
              <Typography className='key' gutterBottom variant="h5" component="div">
                <strong>About Us</strong>
              </Typography>
            </div>
            <div className="sps">
              <Typography variant="h6" className="text">  We are a dynamic and passionate full-stack web development team founded in 2023. Our mission is to create exceptional digital experiences that empower businesses and individuals to thrive in the online world.
              </Typography>
            </div>
          </CardContent>

        </Card>



        <Card className='Downer'>
          <CardContent className="downer-us">
            <div className="sps">
              <Typography className='text' gutterBottom variant="h5" component="div">
                <strong>About Yalla</strong>
              </Typography>
            </div>
            <div className="sps">
              <Typography variant="h6" className="text">
                Our website is a platform that connects athletes and managers, offering a thriving ecosystem for collaboration and networking. It also allows for the purchase and sale of sports-related products, promoting growth and innovation. Our goal is to empower individuals and businesses, fostering a vibrant sports community for success and growth.
              </Typography>
            </div> </CardContent>

        </Card>



        <Card className='uper'>
          <CardContent className="uper-us">
            <div className="sps">
              <Typography className='key' gutterBottom variant="h5" component="div">
                <strong>Our Goals</strong>
              </Typography>
            </div>
            <div className="sps">
              <Typography variant="h6" className="text">Our goal is to create exceptional digital experiences that empower businesses and individuals to thrive online. We use full-stack web development to deliver innovative, user-centric solutions that drive engagement and growth. We leverage the latest technologies, industry best practices, and trends to create solutions that stand out in a competitive online landscape.             </Typography>
            </div>
          </CardContent>

        </Card>










        <Typography gutterBottom variant="h5" component="div">
          Our Team
        </Typography>


        <div className="pageus">

          <a href="https://www.linkedin.com/in/sayed-mustafa-qarooni-64161a161/" target="_blank" rel="noopener noreferrer" className="card-link">

            <Card className="card-with-flex nightmode-hover" >
              <CardMedia
                component="img"
                image={meImage}
                alt="green iguana"
                className="ms-image"
                style={{
                  height: '100px',
                  width: '100px',
                  borderRadius: '50%',
                }}
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
          </a>


          <a href="https://www.linkedin.com/in/sayed-mustafa-qarooni-64161a161/" target="_blank" rel="noopener noreferrer" className="card-link">
            <Card className="card-with-flex nightmode-hover">
              <CardMedia
                component="img"
                image={azizImage}
                alt="green iguana"
                className="ms-image"
                style={{
                  height: '100px',
                  width: '100px',
                  borderRadius: '50%',
                }}
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
          </a>


          <a href="https://www.linkedin.com/in/halhibshi/" target="_blank" rel="noopener noreferrer" className="card-link">
            <Card className="card-with-flex nightmode-hover">
              <CardMedia
                component="img"
                image={hamadImage}
                alt="green iguana"
                className="ms-image"
                style={{
                  height: '100px',
                  width: '100px',
                  borderRadius: '50%',
                }}
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
          </a>

          <a href="https://www.linkedin.com/in/abbas9naser/" target="_blank" rel="noopener noreferrer" className="card-link">
            <Card className="card-with-flex nightmode-hover">
              <CardMedia
                component="img"
                image={abbasImage}
                alt="green iguana"
                className="ms-image"
                style={{
                  height: '100px',
                  width: '100px',
                  borderRadius: '50%',
                }}
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
          </a>
        </div>
      </div>




      <Footer
        title="Unleash Your Potential, Conquer the Field"
        description="Calls for expansion and reaching your fullest potential in the sports arena!" />

    </>
  );
}