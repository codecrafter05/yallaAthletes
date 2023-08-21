import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Dashboard.css'
const drawerWidth = 240;

export default function PermanentDrawerLeft({ user, setUser }) {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <Box className="divider-left" sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer className='sidebar-style'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            marginTop: '68.5px',
            width: drawerWidth,
            boxSizing: 'border-box',
            position: 'absolute',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List className='list'>
          {['Profile', 'Users', 'Athletes', 'Manager', 'Products', 'News'].map((text, index) => (
            <ListItem className='links' key={text} disablePadding component={Link} to={`/Dashboard/${text}`}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding onClick={text === 'Logout' ? handleLogOut : handleCloseUserMenu}
              component={Link}
              to={`/${text}`}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}