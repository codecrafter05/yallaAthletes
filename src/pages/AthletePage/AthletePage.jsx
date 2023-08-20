import React from 'react';
import BasicGrid from "../../components/Grid/Grid";

export default function AthletePage() {
  const athletes = [
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      name: 'Athlete4444',
      sport: 'Football',
      image: 'https://example.com/athlete1.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

    // Add more athlete objects as needed
  ];

  return (
    <>
      <h1>Athlete Page</h1>
      <BasicGrid data={athletes} />
    </>
  );
}