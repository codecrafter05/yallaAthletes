import React, { useState, useEffect } from "react";
import { getProduct } from "../../utilities/products-services";
import { Container, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import './products.css'
export default function Products() {


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
    <><Container> <h1>Products Page</h1>
      <Divider />
      <Box sx={{ flexGrow: 1, margin: "5%" }}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3} key={product} sx={{}}>
              <Card className="card-container">
                <div className="card-wrapper">
                  <Link className="links" to="#">
                    {/* <CardMedia
                      component="img"
                      className="card-image"
                      image={product.image}
                      alt={`image for ${product.name}`}
                    /> */}
                    <CardContent className="card-content">
                      <Typography variant="body2" color="textSecondary" component="p" className="card-name">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                        {product.description}
                      </Typography>
                    </CardContent>
                    <CardActions></CardActions>
                  </Link>
                </div>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box></Container></>
  );
}



// export default function ProductsPage() {

//   const [products, setProducts] = useState([]);


//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await getProduct();
//       console.log("API Response:", response); // Add this line
//       setProducts(response);
//     } catch (error) {
//       console.log('response isnt working')
//       console.error("Error fetching products:", error);
//     }
//   };

//   return (
//     <Container>
//       <Typography variant="h4" gutterBottom>
//         Products Page
//       </Typography>
//       <hr />
//       <Grid container spacing={2}>
//         {products.map((product) => (
//           <Grid key={product} item xs={12} sm={6} md={4} lg={3}>
//             <div>
//               <h3>{product.name}</h3>
//               <p>{product.description}</p>
//             </div>
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }