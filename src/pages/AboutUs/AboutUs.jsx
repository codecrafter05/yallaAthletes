
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
<<<<<<< HEAD
import './AboutUs.css'
=======
import '../AboutUs/AboutUs.css';
import { Container, Divider } from '@mui/material';
>>>>>>> 9207a36611b3932236d16c1ebb741efdc856aa70

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
      <Container>   <div className="aboutus">

        <Typography variant="h2" >
          Our Story

        </Typography>

      </div>



        <div className='allcontainers'>


          <Card className='midel'>
            <CardContent className="uper-us">
              <div className="sps">
                <Typography className='key' gutterBottom variant="h5" component="div">
                  About Us
                </Typography>
              </div>
              <div className="sps">
                <Typography variant="body1" className="text">  We are a dynamic and passionate full-stack web development team founded in 2023. Our mission is to create exceptional digital experiences that empower businesses and individuals to thrive in the online world.

                  With a diverse range of skills and expertise, we specialize in designing and developing custom web solutions that are tailored to meet our clients' unique needs. From crafting visually stunning user interfaces to implementing robust back-end systems, we have the capabilities to handle every aspect of web development.

                  Our team consists of talented professionals who are dedicated to staying at the forefront of the ever-evolving web technologies and industry trends. We continuously expand our knowledge and skills to ensure that we deliver cutting-edge solutions that exceed expectations.

                  Collaboration is at the core of our approach. We believe in working closely with our clients, understanding their goals, and translating their vision into reality. Throughout the development process, we maintain open lines of communication, providing regular updates and seeking feedback to ensure that our clients' requirements are met at every step.

                  We take pride in our commitment to excellence. Quality is ingrained in everything we do. Our meticulous attention to detail, rigorous testing processes, and adherence to best practices enable us to deliver flawless web applications that are secure, scalable, and optimized for performance.

                  At our core, we are problem solvers and creative thinkers. We love tackling complex challenges and finding innovative solutions. Whether it's building e-commerce platforms, developing web applications, or optimizing existing websites, we approach each project with enthusiasm and a determination to achieve perfection.

                  We are excited to embark on this journey with you and help you unlock the full potential of your digital presence. Partner with us, and together, we will bring your ideas to life and create impactful web experiences that make a difference.    </Typography>
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
                <Typography variant="body1" className="text">
                  Welcome to our website, a dynamic platform that brings together athletes, managers, and provides comprehensive support to the sports community. Our mission is to create a thriving ecosystem where athletes and managers can connect, communicate, and collaborate towards their shared goals. In addition to facilitating networking and support, our website offers a unique opportunity to buy and sell sports-related products. Whether you're looking to purchase top-of-the-line equipment, merchandise, or specialized services, our marketplace provides a streamlined platform for transactions within the sports community. Athletes and managers can not only benefit from networking and support, but also explore a wide range of quality products tailored to their needs. We strive to empower individuals and businesses alike, fostering an environment of growth, innovation, and success. Join our vibrant sports community today and discover the endless possibilities for connection, collaboration, and commerce.
                </Typography>
              </div> </CardContent>

          </Card>



          <Card className='uper'>
            <CardContent className="uper-us">
              <div className="sps">
                <Typography className='key' gutterBottom variant="h5" component="div">
                  Our Goals
                </Typography>
              </div>
              <div className="sps">
                <Typography variant="body1" className="text">Our goal is to create exceptional digital experiences that empower businesses and individuals to thrive in the online world. We are driven by the belief that a well-crafted digital presence can make a significant impact on the success of our clients. Through our expertise in full-stack web development, we strive to deliver innovative and user-centric solutions that captivate audiences, drive engagement, and foster growth. We are dedicated to crafting seamless and intuitive digital experiences that not only meet the unique needs of our clients but also exceed their expectations. By leveraging the latest technologies, following industry best practices, and staying at the forefront of emerging trends, we aim to create digital solutions that empower our clients to stand out in a competitive online landscape. Your success is our motivation, and we are committed to partnering with you to unlock the full potential of your digital presence.              </Typography>
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
        </div></Container>




      <Footer
        title="Unleash Your Potential, Conquer the Field"
        description="Calls for expansion and reaching your fullest potential in the sports arena!" />

    </>
  );
}
