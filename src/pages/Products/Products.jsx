import React from 'react';
import BasicGrid from "../../components/Grid/Grid";
import CartStepper from '../../components/CartStepper/CartStepper';
export default function Products() {
  const Products = [
    {
      name: 'Basketball',
      sport: 'Basketball',
      image: 'https://example.com/basketball.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Football Shoes',
      sport: 'Football',
      image: 'https://example.com/football_shoes.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Tennis Racket',
      sport: 'Tennis',
      image: 'https://example.com/tennis_racket.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Running Shoes',
      sport: 'Running',
      image: 'https://example.com/running_shoes.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Golf Clubs',
      sport: 'Golf',
      image: 'https://example.com/golf_clubs.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Golf Clubs',
      sport: 'Golf',
      image: 'https://example.com/golf_clubs.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Golf Clubs',
      sport: 'Golf',
      image: 'https://example.com/golf_clubs.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }
    // Add more sports products as needed
  ];

  return (
    <>
      <h1>Products Page</h1>
      <br />

      <BasicGrid data={Products} />
      <CartStepper />
    </>
  );
}



