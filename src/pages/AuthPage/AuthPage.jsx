import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
// import Link from '@mui/material/Link';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/collection/COLLECTION_ID/800x600/?sports)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Paper
            elevation={6}
            square
            sx={{
              padding: '20px',
              borderRadius: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.8)', // You can adjust the background color and opacity here
            }}
          >
            {/* Your login form components */}
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              {showSignUp ? (
                <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} />
              ) : (
                <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} />
              )}
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
  
  

  // return (
  //   <main>
  //     <h1>AuthPage</h1>
  //     <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
  //     { showSignUp ?
  //         <SignUpForm setUser={setUser} />
  //         :
  //         <LoginForm setUser={setUser} />
  //     }
  //   </main>
  // );
}