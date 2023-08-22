import React, { useState, useEffect } from "react";
import { getProduct } from "../../utilities/products-services";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

export default function ProductsPage() {

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
    <Container>
      <Typography variant="h4" gutterBottom>
        Products Page
      </Typography>
      <hr />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product} item xs={12} sm={6} md={4} lg={3}>
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}