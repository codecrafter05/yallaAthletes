import React from "react";
import Typography from '@mui/material/Typography';
import bgImage from '../../assets/bg.jpeg'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';



export default function HomePage() {

  return (
    <>
      <article
        className='article'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Typography variant="h2" className='head'>yallaAthletes</Typography>
      </article>
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

      <Typography variant="h3">Devs</Typography>

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
      
      <form action="/products" method="post">
          <div class="form-group row">
            <label for="name">Product Name: </label>
            <input type="text" class="form-control" name="name" id="name" placeholder="Enter Product Name"/>
          </div>
          <div class="form-group row">
            <label for="type">Product Type: </label>
            <select name="type" id="type" class="form-select">
              <option value="Apparel">Apparel</option>
              <option value="Footwear">Footwear</option>
              <option value="Football">Football</option>
              <option value="Basketball">Basketball</option>
              <option value="Tennis">Tennis</option>
            </select>
          </div>
          <div class="form-group row">
            <label for="description">Description: </label>
            <textarea class="form-control" name="description" id="description" cols="30" rows="10"
              placeholder="Write Product Details..."></textarea>
          </div>
          <div class="form-group row">
            <label for="cohort">Quantity: </label>
            <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="0"/>
          </div>
          <div class="form-group row">
            <label for="size">Size: </label>
            <select name="size" id="size" class="form-select">
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
          <div class="form-group row">
            <label for="color">Color: </label>
            <select multiple name="color" id="color" class="form-select">
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
          <input type="submit" value="Add Product" class="button-5 product-submit"/>
        </form>

    </>
  )
}