import React, { useState, useEffect } from "react";
import { getProduct } from "../../utilities/products-services";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

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
      <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
        Products Page
      </Typography>
      <hr />
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product._id} item xs={12} sm={6} md={4} lg={3}>
            <Card
              className="product-card"
              sx={{
                height: '300px',
                overflow: 'hidden',
                marginBottom: '20px',
                backgroundColor: '#d9d9d9',
                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease-in-out', // Add transition property
                '&:hover': {
                  transform: 'translateY(-5px)', // Add lift effect on hover
                },
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" component="h2" sx={{ mb: 1 }}>
                  {product.name}
                </Typography>
                <Typography color="textSecondary" sx={{ mb: 2 }}>
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
