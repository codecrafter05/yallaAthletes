import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
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
    <> <article className='article'>
    <div className='video-container'>
      <video className='video' autoPlay loop muted>
        <source src={vi1mp4} type='video/mp4' />
      </video>
    </div>
    <Typography variant="h2" className='head'><h1>yallaAthletes</h1></Typography>
  </article>
      <Typography variant="h4"><h1>Check us out!</h1></Typography>

      <Card className="boxContainer">
        <CardActionArea  component={Link} to='/athletes'>
          <CardMedia
            component="img"
            height="140"
            image={ggImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Your Target 
            </Typography>
            <Typography variant="body2" color="text.secondary">
            "Your aim is to reach the impossible. Through determination and perseverance, along with hard work and creativity, you can turn challenges into opportunities and transform dreams into reality. The journey to success might be demanding, but with dedication and belief in your abilities, you'll continue moving forward towards achieving the seemingly unattainable."
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/products'>
          <CardMedia
            component="img"
            height="140"
            image={prImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Products
            </Typography>
            <Typography variant="body2" color="text.secondary">
            "Experience a premium fitness journey with stylish and high-quality sportswear."
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/news' className="box large-box" >
          <CardMedia
            component="img"
            height="800"
            image={inImage}
            alt="green iguana"
            
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              News
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Stay updated on the latest local and global events and developments. Explore comprehensive and reliable reports covering various fields and issues, and enjoy live coverage of important events.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Typography variant="h4">About Us</Typography>

      <Card className="devContainer">
        <card>
          <CardMedia
            component="img"
            height="140"
            image={meImage}
            alt="green iguana"
            className="ms-image"
          />
          <CardContent className="us">
            <Typography gutterBottom variant="h5" component="div">
              Sayed Mustafa
            </Typography>
            <Typography variant="body2" color="text.secondary">
             software engineer and web developer with previous experience at Google and Netflix. Currently, I am working with ChatGPT to create amazing AI-powered solutions.
            </Typography>
          </CardContent>
      </card>

        <Card>
          <CardMedia
            component="img"
            height="140"
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
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>

        <card>
          <CardMedia
            component="img"
            height="140"
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
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
      </card>

        <card>
          <CardMedia
            component="img"
            height="140"
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
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </card>
      </Card>


      
      <Footer
        title="Unleash Your Potential, Conquer the Field"
        description="Calls for expansion and reaching your fullest potential in the sports arena.!" />
    </>
  )
}