import { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { signUp } from '../../utilities/users-service';

export default class SignUpForm extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await signUp(formData);
      // Update user state with user
      this.props.setUser(user);
    } catch {
      // Invalid signup
      this.setState({
        error: 'Sign Up Failed - Try Again'
      });
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  }

  handleSwitchToLogin = () => {
    this.props.setShowSignUp(false); // Call the function to switch back to the login form
  }

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate autoComplete="off" onSubmit={this.handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              label="Password"
              type="password"
              autoComplete="off"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              label="Confirm Password"
              type="password"
              autoComplete="off"
            />
            <Typography color="error" sx={{ margin: 0, padding: 0 }}>
              {this.state.error}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={disable}
            >
              Sign Up
            </Button>


          </Box>

          <Link
            component="button"
            variant="body2"
            onClick={this.handleSwitchToLogin}
            sx={{ mt: 3 }}
          >
            Back to Login
          </Link>
      </>
    );
  }
}