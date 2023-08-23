
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

    <Card className="aboutus ">
      <CardMedia
        component="div" // Use a div as the component
        className="aboutusimg-container"
        // style={{ backgroundImage: `url(${abcImage})`}} // Set the background image
      >
        <Typography variant="h1" className='abutusimgback'>
          Our Story 
          <h5>Lizards are a widespread group of squamate reptiles, with over 6,000 Lizards are a widespread group of squamate reptiles, with over 6,000 Lizards are a widespread group of squamate reptiles, with over 6,000</h5>
        </Typography>
      </CardMedia>
    </Card>



    <div className='allcontainers'>

    
    <Card className='midel'> 
     <CardContent className="uper-us">
      <div className="sps">
          <Typography className='key' gutterBottom variant="h5" component="div">
            About Us
          </Typography>
      </div>
      <div className="sps">
          <Typography  variant="body2" className="text">
           Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
      </div>
        </CardContent>
        
    </Card>



    <Card className='Downer'> 
     <CardContent className="downer-us">
      <div className="sps">
          <Typography className='text' gutterBottom variant="h5" component="div">
           About Yalla
          </Typography>
      </div>
      <div className="sps">
          <Typography  variant="body2" className="text">
           Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
      </div> </CardContent>
        
    </Card>



    <Card className='uper'> 
     <CardContent className="uper-us">
      <div className="sps">
          <Typography className='key' gutterBottom variant="h5" component="div">
           Ouer Goals 
          </Typography>
      </div>
      <div className="sps">
          <Typography  variant="body2" className="text">
           Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
      </div>
        </CardContent>
        
    </Card>





    
    



        <Typography gutterBottom variant="h5" component="div">
                        About Members
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
      description="Calls for expansion and reaching your fullest potential in the sports arena.!" />
     
  </>
  );
}
