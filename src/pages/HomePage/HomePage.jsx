import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import bgImage from '../../assets/bg.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import { createA_Product } from '../../utilities/products-services';


export default function HomePage() {

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

  const handleChangeMutiple = (e) => {
    const { name, options } = e.target;
    const selectedValues = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
  
    setData((prevData) => ({
      ...prevData,
      [name]: selectedValues,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const product = await createA_Product(setData);
      console.log('New Product:', product);
      setData(initialProductData);
    } catch (err) {
      console.error('Error creating product:', err);
    }
  };

  return (
    <>
      <article
        className='article'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Typography variant="h2" className='head'>yallaAthletes</Typography>
      </article>

      <Typography variant="h4">Check us out!</Typography>

      <Card className="boxContainer">
        <CardActionArea component={Link} to='/athletes'>
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Athletes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/products'>
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Products
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/news' className="box large-box" >
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              News
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Typography variant="h4">Devs</Typography>

      <Card className="devContainer">
        <CardActionArea component={Link} to='/athletes'>
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Athletes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/products'>
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Products
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/news' className="box large-box" >
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              News
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActionArea component={Link} to='/news'>
          <CardMedia
            component="img"
            height="140"
            image={bgImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              News
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Product Name: </label>
          <input type="text" name="name" id="name" placeholder="Enter Product Name" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="type">Product Type: </label>
          <select name="type" id="type" onChange={handleChange}>
            <option value="Apparel">Apparel</option>
            <option value="Footwear">Footwear</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <textarea name="description" id="description" cols="30" rows="10"
            placeholder="Write Product Details..." onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="quantity">Quantity: </label>
          <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="0" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="size">Size: </label>
          <select name="size" id="size" onChange={handleChange}>
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
          </select>
        </div>
        <div>
          <label htmlFor="color">Color: </label>
          <select multiple name="color" id="color" onChange={handleChange}>
            <option value="Black">Black</option>
            <option value="Beige">Beige</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="White">White</option>
            <option value="Red">Red</option>
            <option value="Yellow">Yellow</option>
            <option value="Orange">Orange</option>
          </select>
        </div>
        <input type="file" name="photo" id='photo' accept="image/*"/>
        <button type="submit">Add Product</button>
      </form>

    </>
  )
}