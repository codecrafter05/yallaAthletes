import * as React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { getImageForLoggedInUser } from '../../utilities/userImage-service';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logoImg from '../../assets/logo.png'

export default function NavBar({ user, setUser }) {
  const pages = ['Products', 'Athletes', 'News', 'AboutUs'];
  let settings = [];
  if(user.role === 'Admin' || user.role === 'Manager') {
    settings = ['Profile', 'Dashboard', 'Logout'];
  } else if(user.role === 'Athlete') {
    settings = ['Profile', 'Offers', 'Logout'];
  } else {
    settings = ['Profile', 'Logout'];
  }

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
    window.location.href = '/'; // Change the URL as needed
  }

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [userImage, setUserImage] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const changingUserDp = {
    isLoggedIn: true, // Change this based on user login status
    photo: '/static/images/avatar/2.jpg', // User's photo URL
  };

  const fetchUserImage = async () => {
    try {
      const response = await getImageForLoggedInUser();
      setUserImage(response.photo);
    } catch (error) {
      console.error("Error fetching user's image:", error);
    }
  };

  useEffect(() => {
    fetchUserImage();
  }, []);

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#333333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <img
        src={logoImg}
        alt="yallaAthletes Logo"
        style={{ width: '100px', height: 'auto', marginRight: '10px' }}
      />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page}`}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                component={Link}
                to={`/${page}`}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cart">
              <IconButton component={Link} to="/cart" sx={{ p: 0, color: 'inherit', ml: 2, mr: 2 }}>
                <ShoppingCartIcon />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0, mr: 2}}>
            <Typography>Welcome, {`${user.firstName} ${user.lastName}`} </Typography>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {changingUserDp.isLoggedIn ? (
                <Avatar alt="User Photo" src={userImage} />
              ) : (
                <Avatar alt="Default Avatar" src="/static/images/default-avatar.jpg" />
              )}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >

            {settings.map((setting) => (
              <MenuItem key={setting} onClick={setting === 'Logout' ? handleLogOut : handleCloseUserMenu} component={Link} to={setting === 'Offers' ? '/Dashboard/Offers' : `/${setting}`}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}

            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}