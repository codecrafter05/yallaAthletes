// import * as React from 'react';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../../components/Newspagecomponents/Footer';
// import Typography from '@mui/material/Typography';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea } from '@mui/material';
// import { Button, CardActionArea, CardActions } from '@mui/material';
import tennisImage from '../../assets/tennis.jpg';
// import sikelsImage from '../../assets/sikels.jpg';
import ccImage from '../../assets/cc.jpg';
import bbImage from '../../assets/bb.jpg';
import ddImage from '../../assets/dd.jpg';
import kkImage from '../../assets/kk.jpg';
import ttImage from '../../assets/tt.jpg';
import torImage from '../../assets/tor.jpg';
import vvImage from '../../assets/vv.jpg';
// import ssImage from '../../assets/ss.jpg';
import nnImage from '../../assets/nn.jpg';
// import "./news.css"
import React from 'react';
import { Box } from '@mui/material';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid, // Make sure Grid is imported
} from '@mui/material';

export default function MultiActionAreaCard() {
  return (
  <>
       
       <container spacing={5} sx={{ maxWidth: 1000, margin: '0 auto' }}> 
        <Grid container spacing={5} sx={{ maxWidth: 1000, margin: '0 auto' }}>
      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={ddImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>

      
      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={tennisImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>


        
      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={ccImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>




      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={kkImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>




      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={bbImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>



      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={ttImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>




      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={torImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>



      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={vvImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>




      <Grid item xs={8} sm={5} md={4}>
        <Card sx={{ height: '100%' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={nnImage}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Grid>
      
    </Grid>
    </container>
  
    <Footer
    title="Unleash Your Potential, Conquer the Field"
    description="Calls for expansion and reaching your fullest potential in the sports arena.!" />
    </>
  )
  
  
 
}











// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

// export default function Blog() {
//   return (
//     <>

//       <ThemeProvider theme={defaultTheme}>
//       <Grid item xs={12} sm={10} md={9}>
//         <div className="image-container2">
//           <img src={sikelsImage} alt="Background" className="background-image2" />
//           <div className="overlay2"></div>
//           <div className="text-container2">
//             <Typography variant="h2" className="text2">Breaking News</Typography>
//           </div>
//         </div>
//         </Grid>

//         <Container maxWidth="lg">

//           <main>


//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={10} md={9}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="500"
//                       image={tennisImage}
//                       alt="green iguana"
//                       className="imageFitCover"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Yoga
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">Yoga, an ancient art that harmonizes the body and mind, is recommended by doctors for its potential benefits in strengthening the body and calming the mind. Practicing yoga is considered a valuable option for achieving balance between the physical and spiritual aspects.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>


//               <Grid item xs={12} sm={10} md={3}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="630"
//                       image={bascktballImage}
//                       alt="green iguana"
//                     />
//                     {/* <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Athletes
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent> */}
//                   </CardActionArea>
//                 </Card>
//               </Grid>



//               <Grid item xs={12} sm={6} md={3}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="340"
//                       image={bbImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Michael
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         The cycling champion, a symbol of determination and challenge, captivates the world with his remarkable achievements on the track. His heart beats with the spirit of competition and determination, as he pushes boundaries and tackles tough terrains with confidence. His history is filled with victories and challenges, making him a role model for youth aspiring to achieve success and break records.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>


//               <Grid item xs={12} sm={6} md={3}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="360"
//                       image={ddImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Mary
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Mary excels in the latest championship of the arena, which she contracted with one of the most prominent clubs in Europe.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>


//               <Grid item xs={12} sm={6} md={3}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="380"
//                       image={kkImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         David
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Coach David has proven his worth by training the youth and has been awarded the best coach in America.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>


//               <Grid item xs={12} sm={6} md={3}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="500"
//                       image={ttImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Sara
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Sara returns to the fields with skill and determination.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>


//               <Grid item xs={12} sm={6} md={3}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="500"
//                       image={torImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Tore
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Tore returns once again to climb the mountains.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>


//               <Grid item xs={12} sm={6} md={6}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="520"
//                       image={vvImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Karen
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Karen retires from sports after a successful career.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>


//               <Grid item xs={12} sm={6} md={7}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="700"
//                       image={nnImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Kides
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Determined children in sports pursue their aspirations with ambition.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>



//               <Grid item xs={12} sm={10} md={5}>
//                 <Card className="boxContainerMustafa">
//                   <CardActionArea to='/athletes'>
//                     <CardMedia
//                       component="img"
//                       height="700"
//                       image={ssImage}
//                       alt="green iguana"
//                     />
//                     <CardContent>
//                       <Typography gutterBottom variant="h5" component="div">
//                         Linda
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         Linda returns to social media platforms.
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Grid>




//             </Grid>

//           </main>
//         </Container>

//         <Footer
//           title="Unleash Your Potential, Conquer the Field"
//           description="Calls for expansion and reaching your fullest potential in the sports arena!" />

//       </ThemeProvider>
//     </>
//   );
// }