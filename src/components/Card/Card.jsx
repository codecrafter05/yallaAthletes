import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './card.css'; // Import the CSS file

export default function Card2({ item }) {
    const { name, sport, image, description } = item;

    return (
        <Link to="/another-page" style={{ textDecoration: 'none' }}>
            <Card className="card-container">
                {image && (
                    <CardMedia
                        component="img"
                        className="card-image"
                        height="230"
                        image={image}
                        alt={name}
                    />
                )}
                <CardContent className="card-content">
                    <Typography variant="h5" className="card-name">
                        {name}
                    </Typography>
                    {sport && (
                        <Typography variant="body2" className="card-sport">
                            Sport: {sport}
                        </Typography>
                    )}
                    {description && (
                        <Typography variant="body2" className="card-description">
                            {description}
                        </Typography>
                    )}
                </CardContent>
                <CardActions>
                    {/* Add card actions here */}
                </CardActions>
            </Card>
        </Link>
    );
}