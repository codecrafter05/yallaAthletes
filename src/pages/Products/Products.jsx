import React, { useState, useEffect } from "react";
import { getProduct } from "../../utilities/products-services";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardMedia } from "@mui/material";

import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProduct();
      console.log("API Response:", response);
      setProducts(response);
    } catch (error) {
      console.log("response isnt working");
      console.error("Error fetching products:", error);
    }
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ mt: 4, mb: 5 }}>
        Products Page
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
            <Card sx={{
              maxWidth: 230, height: 290,
              transition: 'transform 0.2s ease',
              '&:hover': {
                transform: 'scale(1.05)'
              }
            }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.photo}
                  alt="green iguana"

                />

                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {product.price} BD
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
