import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import {createA_Product} from '../../utilities/products-services'
import { Paper, Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";
import ProductList from "../ProductList/ProductList";


export default function EditProduct() {
  const initialProductData = {
    name: '',
    type: 'Apparel',
    description: '',
    quantity: 0,
    size: 'S',
    color: ['Black'],
    photo: ''
  };

  const [data, setData] = useState(initialProductData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = await createA_Product(data);
      console.log('New Product:', product);
      setData(initialProductData);
    } catch (err) {
      console.error('Error creating product:', err);
    }
  };

  function handleImageUpload(evt) {
    // get the image uploaded in input file, it will be the first element in files arr
    const file = evt.target.files[0];
    console.log(file);

    TransformFileData(file);
  }
  // transfer file/image to base64 string
  function TransformFileData(file) {
    //The FileReader object lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read.
    // FileReader can only access the contents of files that the user has explicitly selected, either using an HTML <input type="file"> element or by drag and drop
    // filereader is js object
    const reader = new FileReader();

    if (file) {
      // Starts reading the contents of the specified Blob, once finished, the "result" attribute contains a data: URL representing the file's data.
      reader.readAsDataURL(file);
      // Fired when a read has completed, successfully or not.
      reader.onloadend = () => {
        console.log(reader.result);
        setData({ ...data, photo: reader.result });
        // setError("");
      };
    } else {
      // no image
      setData({ ...data, photo: "" });
      // setError("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
    <Box sx={{ width: "100%", maxWidth: "600px", margin: "0 auto", marginTop: "20px" }}>
      <Paper elevation={3} sx={{ padding: "16px", marginBottom: "16px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField
            label="Product Name"
            name="name"
            placeholder="Enter Product Name"
            onChange={handleChange}
          />
          <FormControl>
            <InputLabel>Product Type</InputLabel>
            <Select name="type" onChange={handleChange}>
              <MenuItem value="Apparel">Apparel</MenuItem>
              <MenuItem value="Footwear">Footwear</MenuItem>
              <MenuItem value="Football">Football</MenuItem>
              <MenuItem value="Basketball">Basketball</MenuItem>
              <MenuItem value="Tennis">Tennis</MenuItem>
            </Select>
          </FormControl>
            <TextField
              label="Write Product Details"
              placeholder="Write Product Details..."
              name="description"
              rowsMin={3}
              onChange={handleChange}
            />

        </Box>
      </Paper>

      <Paper elevation={3} sx={{ padding: "16px", marginBottom: "16px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField
            type="number"
            label="Quantity"
            name="quantity"
            inputProps={{ min: "1", max: "5" }}
            onChange={handleChange}
          />
          <TextField
            type="number"
            label="Price"
            name="price"
            inputProps={{ min: "1", max: "5" }}
            onChange={handleChange}
          />
            <TextField
              type="file"

              name="photo"
              inputProps={{ accept: "image/*" }} 
              onChange={handleImageUpload}
            />
          <FormControl>
            <InputLabel>Size</InputLabel>
            <Select name="size" onChange={handleChange} >
              <MenuItem value="S">S</MenuItem>
              <MenuItem value="M">M</MenuItem>
              <MenuItem value="L">L</MenuItem>
              <MenuItem value="XL">XL</MenuItem>
              <MenuItem value="40">40</MenuItem>
              <MenuItem value="41">41</MenuItem>
              <MenuItem value="42">42</MenuItem>
              <MenuItem value="43">43</MenuItem>
              <MenuItem value="44">44</MenuItem>
              <MenuItem value="45">45</MenuItem>
              <MenuItem value="46">46</MenuItem>
              <MenuItem value="47">47</MenuItem>
              <MenuItem value="48">48</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>Color</InputLabel>
            <Select name="color" onChange={handleChange}>
              <MenuItem value="Black">Black</MenuItem>
              <MenuItem value="Beige">Beige</MenuItem>
              <MenuItem value="Blue">Blue</MenuItem>
              <MenuItem value="Green">Green</MenuItem>
              <MenuItem value="White">White</MenuItem>
              <MenuItem value="Red">Red</MenuItem>
              <MenuItem value="Yellow">Yellow</MenuItem>
              <MenuItem value="Orange">Orange</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>

      <Button type="submit" variant="contained" color="primary">
        Add Product
      </Button>

      <Button type="submit" variant="contained" color="primary">
        Cancel
      </Button>
    </Box>
  </form>
  );
}
