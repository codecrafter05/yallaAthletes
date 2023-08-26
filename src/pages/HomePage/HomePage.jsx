import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Footer from '../../components/Newspagecomponents/Footer';
import vi1mp4 from '../../assets/vi1.mp4';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { getProduct } from '../../utilities/products-api';
import CardActions from '@mui/material/CardActions';
import './HomePage.css'
import categories1 from "./../../assets/categories1.jpg"
import categories2 from "./../../assets/categories2.jpg"
import newspaper from "./../../assets/newspaper1.jpg"
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


  useEffect(() => {
    const handleClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    };

    const button = document.querySelector('.discover-button-home');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    const handleScroll = () => {
      const scrollButton = document.querySelector('.scroll-to-top');
      if (scrollButton) {
        if (window.scrollY > 0) {
          scrollButton.classList.add('show');
        } else {
          scrollButton.classList.remove('show');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='video-container-home'>
        <video className='video' autoPlay={true} loop={true} muted={true}>
          <source src={vi1mp4} type='video/mp4' />
        </video>

        <div className="content-wrapper-home">
          <Typography variant="h1" className="typography-overlay-home">
            yallaAthletes
          </Typography>
          <Typography variant="h4" className="typography-overlay-home">
            Fitness! Fun! Community!
          </Typography>
          <Button href='#di' className="discover-button-home" >
            Discover more
          </Button>
        </div>
      </div>
      <div id="di" className="boxContainer-home">

        <div class="container-categories-flex">
          <div class="row-categories">
            <div class="col-categories">
              <div class="image-container-categories">
                <a href="/athletes">
                  <div class="overlay-categories"></div>
                  <img src={categories2} alt="players" />
                  <div class="text-overlay-categories">
                    <h1>Athletes</h1>
                  </div>
                </a>

              </div>
              <div class="image-container-categories">
                <a href='/products'>
                  <div class="overlay-categories"></div>
                  <img src={categories1} alt="Products" />
                  <div class="text-overlay-categories">
                    <h1>Products</h1>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-categories">
              <div class="full-height-element-categories">
                <a href='/news'>
                  <div class="overlay-categories"></div>
                  <img src={newspaper} alt="Products" />
                  <div class="text-overlay-categories">
                    <h1>News</h1>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-categories center" >
              <div class="text-container-categories">
                <h1>Enjoy this Services</h1>
                <h2>Choose your destnaiton to the next world</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container-atl-home">
          <div className="text-container-home">
            <Typography sx={{ fontSize: 90 }}>
              Our Popular Athletes
            </Typography>

          </div>
          <div className="grid-container-home">
            {products.slice(0, 3).map((product) => (
              <div className="grid-item" key={product}>
                <Card className="product-card-container-home">
                  <div className="product-card-wrapper-home">
                    <Link className="product-card-link-home" to="#">
                      <CardMedia
                        component="img"
                        className="product-card-image"
                        image={product.photo}
                        alt={`image for ${product.name}`}
                      />
                      <CardContent className="product-card-content-home">
                        <Typography variant="h6" color="black" component="p" className="product-card-name-home">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="black" component="p" className="product-card-description-home">
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

        <div className="container-pro-home">
          <div className="text-container-home">
            <Typography sx={{ fontSize: 90 }}>Most Selling Products</Typography>
          </div>
          <div className="grid-container-home">
            {products.slice(0, 3).map((product) => (
              <div className="grid-item-home" key={product}>
                <Card className="product-card-container-home">
                  <div className="product-card-wrapper-home">
                    <Link className="product-card-link-home" to="#">
                      <CardMedia
                        component="img"
                        className="product-card-image"
                        image={product.photo}
                        alt={`image for ${product.name}`}
                      />
                      <CardContent className="product-card-content-home">
                        <Typography variant="h6" color="black" component="p" className="product-card-name-home">
                          {product.name}
                        </Typography>
                        <Typography variant="body2" color="black" component="p" className="product-card-description-home">
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

      <a href="#" class="scroll-to-top">
        <i class="fas fa-arrow-up">UP</i>
      </a>

      <Footer
        title="Unleash Your Potential, Conquer the Field"
        description="Calls for expansion and reaching your fullest potential in the sports arena.!" />

    </>
  )
}