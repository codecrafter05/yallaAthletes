import * as React from 'react';
import * as userService from '../../utilities/users-service';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Dashboard.css';
import Container from '@mui/material/Container';
import ForwardTwoToneIcon from '@mui/icons-material/ForwardTwoTone';
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import InventoryIcon from '@mui/icons-material/Inventory';
import LogoutIcon from '@mui/icons-material/Logout';


const drawerWidth = 240;

export default function DashboardPage({ user, setUser }) {
  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
    window.location.href = '/'; // Change the URL as needed
  }

    // Define role-based lists
    const roleBasedLists = {
      Admin: ['Athletes', 'Offers', 'Products'],
      Manager: ['Offers', 'Products'],
    };

    const itemIcons = {
      Athletes: <SportsGymnasticsIcon />,
      Offers: <LocalOfferIcon />,
      Products: <InventoryIcon />,
    };
  
    // Get the user's role
    const userRole = user ? user.role : '';

  if (user.role !== 'Admin' && user.role !== 'Manager') {
    return (
      <Container>
        <Box sx={{ marginTop: '20px', marginBottom: '20px' }}>
          <h1>You are not authorized to view this page.</h1>
        </Box>
      </Container>
    );
  }

  return (
    <div>
      {user.role === 'Admin' || user.role === 'Manager' ? (
        <Button onClick={toggleDrawer('left', true)} sx={{ display: 'flex', justifyContent: 'start' }}>
          Show SideBar
          <ForwardTwoToneIcon />
        </Button>
      ) : null }
      <SwipeableDrawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer('left', false)}
        onOpen={toggleDrawer('left', true)}
      >
        <Box sx={{ width: drawerWidth}}>
          <Divider />
          <List>
            {roleBasedLists[userRole]?.map((text, index) => (
              <ListItem key={text} disablePadding component={Link} to={`/Dashboard/${text}`}>
                <ListItemButton>
                  <ListItemIcon>
                  {itemIcons[text] }
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            <ListItem key="Logout" disablePadding onClick={handleLogOut} component={Link} to="/Logout">
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}