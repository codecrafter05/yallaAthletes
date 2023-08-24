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
      xs={false}
      sm={4}
      md={7}
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/800x600/?sports)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: (t) =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
      {/* <h1>AuthPage</h1>
      <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button> */}
      {showSignUp ? (
        <SignUpForm setUser={setUser} setShowSignUp={setShowSignUp} />
      ) : (
        <LoginForm setUser={setUser} setShowSignUp={setShowSignUp} />
      )}
      </Box>
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