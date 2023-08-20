import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './card.css'; // Import the CSS file

const Card2 = ({ item }) => {
    const { name, image, description } = item;
    return (
        <Card className="card-container">
            <div className="card-wrapper">
                <Link to="#">
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
                        <Typography variant="body2" color="textSecondary" component="p" className="card-name">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="card-description">
                            {description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        {/* Add card actions here */}
                    </CardActions>
                </Link>
            </div>
        </Card>
    );
};

export default Card2;