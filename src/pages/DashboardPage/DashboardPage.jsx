import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './Dashboard.css';

const drawerWidth = 240;

export default function Sidebar({ user, setUser }) {
  const [anchorElUser, setAnchorElUser] = React.useState(null);





  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            marginTop: '68.5px',
            width: drawerWidth,
            height: '91%',
            boxSizing: 'border-box',
            position: 'absolute',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Divider />
        <List>
          {['Profile', 'Users', 'Athletes', 'Manager', 'Products', 'News'].map((text, index) => (
            <ListItem key={text} disablePadding component={Link} to={`/Dashboard/${text}`}>
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
          <ListItem key="Logout" disablePadding onClick={handleLogOut} component={Link} to="/Logout">
            <ListItemButton>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}