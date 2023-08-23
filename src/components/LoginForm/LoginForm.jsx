import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


export default function LoginForm({ setUser, setShowSignUp }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);

    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          yallaAthletes
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  // <p>&nbsp;{error}</p>
  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          value={credentials.password}
          onChange={handleChange}
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
        />
        <Typography color="error" sx={{ margin: 0, padding: 0 }}>
          {error}
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              href="#"
              variant="body2"
              onClick={() => setShowSignUp(true)}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
    // <div>
    //   <div className="form-container">
    //     <form autoComplete="off" onSubmit={handleSubmit}>
    //       <label>Email</label>
    //       <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
    //       <label>Password</label>
    //       <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
    //       <button type="submit">LOG IN</button>
    //     </form>
    //   </div>
    //   <p className="error-message">&nbsp;{error}</p>
    // </div>
  );
}