import { useEffect } from 'react';
import './NotFound.css';
import { Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    const container = document.getElementById('container');

    const handleMouseMove = (e) => {
      const x = -e.clientX / 5;
      const y = -e.clientY / 5;
      container.style.backgroundPositionX = x + 'px';
      container.style.backgroundPositionY = y + 'px';
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div id="container" className="container">
      <div className="content">
        <h1>404</h1>
        <h4>Oops! Page Not Found</h4>
        <p>
          The page you were looking for doesn't exist. You may have mistyped the address or the page may have moved.
        </p>
        <Button variant='contained' color='info' component={Link} to="/">Back To Home</Button>
      </div>
    </div>
  );
}
