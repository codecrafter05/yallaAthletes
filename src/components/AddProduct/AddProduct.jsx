import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { Card, CardContent, TextField, Grid, Button } from "@mui/material";

function ProductForm() {
  const initialProductData = {
    name: "",
    type: "Apparel",
    description: "",
    quantity: "",
    size: "S",
    color: [],
  };

  const [data, setData] = useState(initialProductData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add code here to handle form submission
      console.log("Form submitted:", data);
      setData(initialProductData);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
        Add Product
      </Typography>
      <Card variant="outlined" sx={{ mt: 2 }}>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Product Name"
                  variant="outlined"
                  name="name"
                  value={data.name}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Product Type"
                  variant="outlined"
                  name="type"
                  select
                  value={data.type}
                  fullWidth
                  onChange={handleChange}
                >
                  <option value="Apparel">Apparel</option>
                  <option value="Footwear">Footwear</option>
                  <option value="Football">Football</option>
                  <option value="Basketball">Basketball</option>
                  <option value="Tennis">Tennis</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  name="description"
                  multiline
                  rows={5}
                  value={data.description}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Quantity"
                  variant="outlined"
                  name="quantity"
                  type="number"
                  value={data.quantity}
                  fullWidth
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Size"
                  variant="outlined"
                  name="size"
                  select
                  value={data.size}
                  fullWidth
                  onChange={handleChange}
                >
                  <optgroup label="apparel-choices">
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </optgroup>
                  <optgroup label="footwear-choices">
                    <option value="40">40</option>
                    <option value="41">41</option>
                    <option value="42">42</option>
                    <option value="43">43</option>
                    <option value="44">44</option>
                    <option value="45">45</option>
                    <option value="46">46</option>
                    <option value="47">47</option>
                    <option value="48">48</option>
                  </optgroup>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Color"
                  variant="outlined"
                  name="color"
                  select
                  multiple
                  value={data.color}
                  fullWidth
                  onChange={handleChange}
                >
                  <option value="Black">Black</option>
                  <option value="Beige">Beige</option>
                  <option value="Blue">Blue</option>
                  <option value="Green">Green</option>
                  <option value="White">White</option>
                  <option value="Red">Red</option>
                  <option value="Yellow">Yellow</option>
                  <option value="Orange">Orange</option>
                </TextField>
              </Grid>
            </Grid>
            <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
              Add Product
            </Button>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ProductForm;
