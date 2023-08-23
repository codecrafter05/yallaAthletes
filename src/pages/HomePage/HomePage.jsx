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
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { getProduct } from '../../utilities/products-api';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Box from '@mui/material/Box';
export default function HomePage() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProduct();
      console.log("API Response:", response); // Add this line
      setProducts(response);
    } catch (error) {
      console.log('response isnt working')
      console.error("Error fetching products:", error);
    }
  };

  return (
    <>
      <div className='video-container'>
        <video className='video' autoPlay={true} loop={true} muted={true}>
          <source src={vi1mp4} type='video/mp4' />
        </video>

        <div className="content-wrapper">
          <Typography variant="h1" className="typography-overlay">
            yallaAthletes
          </Typography>
          <Typography variant="h4" className="typography-overlay">
            Fitness! Fun! Community!
          </Typography>
          <Button href='#di' className="discover-button" >
            Discover more
          </Button>
        </div>
      </div>
      <div id="di" className="boxContainer">





        <div className="cards-container">
          <div className="card-column">
            <Card className="card-with-overlay">
              {/* Card content */}

              <CardActionArea component={Link} to="/athletes">
                <div className="image-container">
                  <CardMedia component="img" src='https://pbs.twimg.com/ext_tw_video_thumb/1681047906340462593/pu/img/noyQeOr2pED5TDac.jpg' alt="green iguana" />
                  <div className="overlay-text">
                    <Typography variant="h5" component="div">
                      Athlete
                    </Typography>
                  </div>
                </div>
              </CardActionArea>

            </Card>

            <Card className="card-with-overlay">
              {/* Card content */}
              <CardActionArea comp onent={Link} to="/products">
                <div className="image-container">
                  <CardMedia component="img" src='https://www.agon-systems.com/wp-content/uploads/2021/08/ck1.jpg' alt="green iguana" />
                  <div className="overlay-text">
                    <Typography variant="h5" component="div">
                      Products
                    </Typography>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </div>

          <div className="card-middle">
            <Card className="card-with-overlay">
              <CardActionArea component={Link} to="/news">
                <div className="image-container">
                  <CardMedia component="img" src='https://images.unsplash.com/photo-1641138628182-44dafabba70f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80' alt="green iguana" />
                  <div className="overlay-text">
                    <Typography variant="h5" component="div">
                      News
                    </Typography>
                  </div>
                </div>
              </CardActionArea>
            </Card>
          </div>
          <Typography variant="h4">Enjoy this services</Typography>
        </div>

        <div className="container-pro">
          <div className="text-container">
            <Typography sx={{ fontSize: 90 }}>Our Popular Athletes</Typography>
          </div>
          <div className="grid-container">
            {products.map((product) => (
              <div className="grid-item" key={product}>
                <Card className="product-card-container">
                  <div className="product-card-wrapper">
                    <Link className="product-card-link" to="#">
                      {/* <CardMedia
                  component="img"
                  className="product-card-image"
                  image={product.image}
                  alt={`image for ${product.name}`}
                /> */}
                      <CardContent className="product-card-content">
                        <Typography variant="body2" color="textSecondary" component="p" className="product-card-name">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="product-card-description">
                          {product.description}
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="container-pro-1">
          <div className="text-container-1">
            <Typography sx={{ fontSize: 90 }}>Most Selling Products</Typography>
          </div>
          <div className="grid-container-1">
            {products.map((product) => (
              <div className="grid-item-1" key={product}>
                <Card className="product-card-container-1">
                  <div className="product-card-wrapper-1">
                    <Link className="product-card-link-1" to="#">
                      {/* <CardMedia
                  component="img"
                  className="product-card-image-1"
                  image={product.image}
                  alt={`image for ${product.name}`}
                /> */}
                      <CardContent className="product-card-content-1">
                        <Typography variant="body2" color="textSecondary" component="p" className="product-card-name-1">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="product-card-description-1">
                          {product.description}
                        </Typography>
                      </CardContent>
                      <CardActions></CardActions>
                    </Link>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>


      </div>






      <Footer
        title="Unleash Your Potential, Conquer the Field"
        description="Calls for expansion and reaching your fullest potential in the sports arena.!" />

    </>
  )
}